import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../../src/AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import "../../pages/login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Log in error");
    }

    setLoading(false);
  }

  return (
    <>
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
            <div>{error && <Alert variant="danger">{error}</Alert>}</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="pt-2" id="email">
                <Form.Control
                  placeholder="Email"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Control
                  placeholder="Password"
                  type="password"
                  ref={passwordRef}
                  required
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
                size="sm"
                type="submit"
              >
                Login
              </Button>
              <Form.Text className="text-muted pt-3 d-flex justify-content-center">
                Not a user?
                <a className="pl-1" href="/">
                  Sign up
                </a>
              </Form.Text>
            </Form>
          </div>
          <div className="bg-transparent text-center text-white position-absolute copyright">
            Ⓒ 2020 WHERE ATHLETES TALK
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
