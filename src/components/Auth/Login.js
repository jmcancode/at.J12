import React, { Component } from "react";
import { Link } from "react-router-dom";

// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Firebase
import firebase from "../../Firebase/Firebase.utils";
// custom css
import "../../pages/login.css";
// import Alert from "react-bootstrap/Alert";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users"),
  };

  displayErrors = (errors) =>
    errors.map((error, i) => (
      <p className="text-muted" key={i}>
        {error.message}
      </p>
    ));

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((signedInUser) => {
          console.log(signedInUser);
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src={require("../../assets/login-example.jpg")}
          alt="Card image"
          className="d-lg-none mt-0 border-0"
          style={{ borderColor: "transparent", height: "100vh" }}
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
              ATHLETE LOGIN
            </Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Control
                  onChange={this.handleChange}
                  value={email}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  onChange={this.handleChange}
                  value={password}
                  className={this.handleInputError(errors, "password")}
                  type="password"
                  id="inputPassword6"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Button
                block
                style={{
                  backgroundColor: "#b57000",
                  borderColor: "transparent",
                }}
                variant="primary"
                disabled={loading}
                className={loading ? "loading" : ""}
                size="sm"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
              <Form.Text className="text-muted pt-3 d-flex justify-content-center">
                Not a user?
                <Link className="pl-1" to="/">

                  Sign up
                </Link>
              </Form.Text>
            </Form>
            {errors.length > 0 && (
              <alert i error>
                <h4 style={{ color: "red" }}>Error</h4>
                {this.displayErrors(errors)}
              </alert>
            )}
          </div>
          <div className="bg-transparent text-center text-white position-absolute copyright">
            Ⓒ 2020 WHERE ATHLETES TALK
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Login;
