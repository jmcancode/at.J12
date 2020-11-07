import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../pages/login.css";
import { connect } from "react-redux";
import { signIn } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";


class login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.props.history.push("/home");
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/home" />;
    return (
      <>
        <Card className="bg-dark text-white border-0">
          <Card.Img
            src={require("../../assets/WakeForest/login.jpg")}
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
                <Form.Group className="pt-2">
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    onChange={this.handleChange}
                    id="email"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  block
                  style={{
                    backgroundColor: "#9E7E38",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  size="sm"
                  type="submit"
                > 
                Log-In 
                </Button>
                <div className="d-flex justify-content-center red-text">
                  {authError ? <p>{authError}</p> : null}
                </div>
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
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
