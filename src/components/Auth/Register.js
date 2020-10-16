import React, { useRef, useState } from "react";

// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert'
// Firebase
// import firebase from "../../Firebase/Firebase.utils";
import {  useHistory } from "react-router-dom";
import { useAuth } from "../../../src/AuthContext/AuthContext";

// custom css
import "../../pages/login.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
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
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" type="email" ref={emailRef} required />
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
            <Form.Group id="password">
              <Form.Control className="m-0" placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control placeholder="Password Confirmation" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              block
              variant="primary"
              disabled={loading}
              size="sm"
              type="submit"
              value="Submit"
              style={{
                backgroundColor: "#b57000",
                borderColor: "transparent",
              }}
              className={loading ? "loading" : ""}
              
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
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <div className="bg-transparent text-center text-white position-absolute copyright">
          Ⓒ 2020 WHERE ATHLETES TALK
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
