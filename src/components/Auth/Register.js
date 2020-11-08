import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {signUp} from "../../Redux/actions/authActions";

// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// custom css
import "../../pages/login.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: '',
    lastName: ''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/home" />;
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
            <Form>
              <Form.Group>
                <Form.Control
                className="border-top-0 border-left-0 border-right-0 bg-0"
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                className="border-top-0 border-left-0 border-right-0 bg-0"
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                className="border-top-0 border-left-0 border-right-0 bg-0"
                  placeholder="Email"
                  type="email"
                  id="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                className="border-top-0 border-left-0 border-right-0 bg-0 m-0"
                  placeholder="Password"
                  type="password"
                  id="password"
                  required
                />
              </Form.Group>
              <Button
                block
                variant="primary"
                size="sm"
                type="submit"
                value="submit"
                style={{
                  backgroundColor: "#b57000",
                  borderColor: "transparent",
                }}
              >
                Register
              </Button>
              <Form.Text className="text-muted pt-3">
                Already a user?
                <a className="pl-1" href="/login">
                  Sign in
                </a>
              </Form.Text>
            </Form>
            <div className="d-flex justify-content-center red-text">
            { authError ? <p>{authError}</p> : null }
          </div>
          </div>
          <div className="bg-transparent text-center text-white position-absolute copyright">
            Ⓒ 2020 WHERE ATHLETES TALK
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
