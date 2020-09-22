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

class Login extends React.Component {
  state = {
    username: "",
    password: "",
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
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((sginedInUser) => {
          console.log(sginedInUser);
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

  handleInputError = (errors, input) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes("inputName")
    )
      ? "error"
      : "";
  };

  render() {
    const { username, password, errors, loading } = this.state;
    return (
      <Card className="bg-dark text-white">
        <Card.Img
          src={require("../../assets/login-example.jpg")}
          alt="Card image"
          style={{ bordercolor: "transparent", height: "100vh" }}
        />
        <Card.ImgOverlay>
          <div className="container-flex d-flex log-container">
            <Card.Title className="log-header text-center">
              ATHLETE LOGIN
            </Card.Title>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Text className="text-muted pb-4">
                Not a user?{" "}
                <Link to="/">Sign up</Link>
              </Form.Text>
              <Button
                variant="primary"
                size="sm"
                type="submit"
                value="Submit"
                className="register-btn"
              >
                Login
              </Button>
              <Form.Text className="text-muted text-center"></Form.Text>
            </Form>
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Login;