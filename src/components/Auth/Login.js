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
import Alert from "react-bootstrap/Alert";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users"),
  };

  displayErrors = errors =>
  errors.map((error, i) => <p key={i}>{error.message}</p>);

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

handleSubmit = event => {
  event.preventDefault();
  if (this.isFormValid(this.state)) {
    this.setState({ errors: [], loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(signedInUser => {
        console.log(signedInUser);
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false
        });
      });
  }
};

isFormValid = ({ email, password }) => email && password;

handleInputError = (errors, inputName) => {
  return errors.some(error => error.message.toLowerCase().includes(inputName))
    ? "error"
    : "";
};

  render() {
    const { email, password, errors, loading } = this.state;
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
                variant="secondary"
                disabled={loading}
                className={loading ? "loading" : ""}
                size="sm"
                type="submit"
                value="Submit"
              >
                Login
              </Button>
              <Form.Text className="text-muted pt-3 d-flex justify-content-center">
                Not a user? <Link to="/">Sign up</Link>
              </Form.Text>
            </Form>
            {errors.length > 0 && (
              <Alert error>
                <h3>Error</h3>
                {this.displayErrors(errors)}
              </Alert>
            )}
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Login;
