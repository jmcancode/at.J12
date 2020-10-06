import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Firebase
import firebase from "../../Firebase/Firebase.utils";
// custom css
import "../../pages/login.css";

import md5 from "md5";
import Alert from 'react-bootstrap/Alert'

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users"),
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, password, passwordConfirmation }) => {
    return (
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=Identicon`,
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved");
              });
            })
            .catch((err) => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false,
              });
            });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            errors: this.setState.errors.contact(err),
            thisloading: false,
          });
        });
    }
  };


  handleInputError = (errors, input) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes("inputName")
    )
      ? "error"
      : "";
  };

  saveUser = (createdUser) => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };


  render() {
    const {
      email,
      password,
      passwordConfirmation,
      errors,
      loading,
    } = this.state;
    return (
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src={require("../../assets/login-example.jpg")}
          alt="Card image"
          className="d-lg-none mt-0 border-0"
          style={{ height: "100vh" }}
        />
        <Card.Img
          src={require("../../assets/images/field-logo.jpg")}
          alt="Card image"
          className="d-none d-lg-block mt-0 border-0 img-fluid"
          style={{ height: "100vh" }}
        />
        <Card.ImgOverlay>
          <div className="container-flex d-flex justify-content-center log-container">
            <Card.Title className="d-lg-none log-header text-center">
              ATHLETE REGISTER
            </Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Control
                  onChange={this.handleChange}
                  value={email}
                  className={this.handleInputError(errors, "email")}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Select your team</option>
                  <option>Basketball</option>
                  <option>Volleyball</option>
                  <option>Soccer</option>
                  <option>Track & Field</option>
                  <option>Football</option>
                </Form.Control>
              </Form.Group>
              <Form.Group >
                <Form.Control
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                  className={this.handleInputError(errors, "password")}
                  type="password"
                  name="password"
                />
              </Form.Group>
              <Form.Group >
                <Form.Control
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                className={this.handleInputError(errors, "password")}
                type="password"
                name="passwordConfirmation"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="text-muted"
                  label="Terms & Conditions"
                />
              </Form.Group>
              <Button
              block
                variant="primary"
                size="sm"
                type="submit"
                value="Submit"
                disabled={loading}
                className={loading ? "loading" : ""}
              >
                Register
              </Button>
              <Form.Text className="text-muted pt-3">
                Already a user? <Link  to="/login">Sign in</Link>
              </Form.Text>
            </Form>
            {this.state.errors.length > 0 && (
              <Alert error>
                <h3 className="text-muted">Error</h3>
                {this.displayErrors(errors)}
              </Alert>
            )}
          </div>
          <div className="bg-transparent text-center text-white position-absolute cpyrght">Ⓒ 2020 WHERE ATHLETES TALK</div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Register;
