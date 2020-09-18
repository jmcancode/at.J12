import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
// Firebase
import firebase from "../Firebase/Firebase.utils";
// custom css
import "./login.css";

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
      .then(sginedInUser => {
          console.log(sginedInUser)
      })
      .catch(err => {
          console.error(err);
          this.setState({
              errors: this.state.errors.concat(err),
              loading: false
          })
      })
      
    }
  };

  isFormValid = ({ email, password}) => email && password;
 
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
      <React.Fragment>
        <div className="container-flex mb-5 pb-5">
          <Card
            className="text-white text-center"
            style={{ height: "170px", borderColor: "transparent" }}
          >
            <Card.Img
              src={require("../assets/images/Rectangle 46.png")}
              alt="Card image"
            />
            <Card.ImgOverlay className="text-center">
              <Image
                thumbnail
                className="login-logo"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  height: "98px",
                }}
                src={require("../assets/images/whitelogo.png")}
              />
            </Card.ImgOverlay>
          </Card>
        </div>
        <Container className="mb-5">
          <div className="card" style={{ borderColor: "transparent" }}>
            <Form className="text-center">
              <Form.Group controlId="Form.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="username"
                  onChange={this.handleChange}
                  className={this.handleInputError(errors, "username")}
                  value={username}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className={this.handleInputError(errors, "password")}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
                <Form.Text className="text-muted text-center">
                  <Link>Forgot Password?</Link>
                </Form.Text>
              </Form.Group>
              <Button
                style={{ backgroundColor: "#b5700b" }}
                disabled={loading}
                className={loading ? "loading..." : " "}
                block
                size="sm"
              >
                Register
              </Button>
              <Form.Text className="text-muted">
                Dont have an account? <Link> Sign up </Link>{" "}
              </Form.Text>

              <Form.Text className="mt-5 text-muted">
                {" "}
                &copy; Where Athletes Talk{" "}
              </Form.Text>
            </Form>
            {this.state.errors.length > 0 && (
              <Alert error>
                <h3>Error</h3>
                {this.displayErrors(errors)}
              </Alert>
            )}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
