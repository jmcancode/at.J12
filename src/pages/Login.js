import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import './login.css';



class Login extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-flex mb-5 pb-5">
          <Card
            className="text-white text-center"
            style={{ height: "170px", borderColor: "transparent", }}
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
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="text-center"
                  type="email"
                  placeholder="Phone number, username, or email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="text-center"
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-muted text-center">
                  Forgot Password?
                </Form.Text>
              </Form.Group>
              <Button
                style={{ background: "#BF5700" }}
                className="btn btn-block"
                variant="primary"
                type="submit"
              >
                Log In
              </Button>
              <Form.Text>Dont have an account? Sign up </Form.Text>
              <h5 className="mt-3 mb-3"> OR </h5>
              <Button
                style={{ background: "#3B5998" }}
                className="btn btn-block"
                variant="primary"
                type="submit"
              >
                Log In with Facebook
              </Button>
              <Button
                style={{ background: "#DD2A7B" }}
                className="btn btn-block"
                variant="primary"
                type="submit"
              >
                Log In with Instagram
              </Button>
              <Button
                style={{ background: "#00ACEE" }}
                className="btn btn-block"
                variant="primary"
                type="submit"
              >
                Log In with Twittter
              </Button>
              <Form.Text className="mt-5">
                {" "}
                &copy; Where Athletes Talk{" "}
              </Form.Text>
            </Form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
