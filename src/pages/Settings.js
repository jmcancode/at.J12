import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";

import { connect } from "react-redux";
import { signOut } from "../Redux/actions/authActions";

import "../assets/css/Settings.css";
import { NavLink } from "react-router-dom";

const Settings = (props) => {
  // const { auth } = props;
  return (
    <>
      <div style={{ backgroundColor: "transparent"}} className="container-sm-flex mt-lg-5 pt-lg-3 mb-3">
        <Container>
          <div className="d-flex justify-content-center mt-2 mt-lg-5">
            <Card style={{ width: "50rem", height: "100%" }}>
              <Card.Header className="text-center" style={{ color: "#9E7E38" }}>
                SETTINGS
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="pt-4">Push Notifications</div>
                  <Form>
                    <Form.Check
                      className="pt-4"
                      type="switch"
                      id="custom-switch"
                      label=""
                    />
                  </Form>
                </ListGroup.Item>
                <Accordion defaultActiveKey="0">
                  <Accordion.Toggle
                    as={ListGroup.Item}
                    eventKey="1"
                    className="border-0"
                  >
                    Privacy Policy
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque
                      nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
                      Donec rutrum congue leo eget malesuada. Proin eget tortor
                      risus. Quisque velit nisi, pretium ut lacinia in,
                      elementum id enim. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Vivamus magna justo, lacinia
                      eget consectetur sed, convallis at tellus. Donec
                      sollicitudin molestie malesuada. Sed porttitor lectus
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </ListGroup>
              <ListGroup.Item className="pb-0">
                <li style={{ listStyle: "none" }}>
                  <NavLink onClick={props.signOut} to="/login">
                    Sign out:{" "}
                    <span className="text-muted">{props.auth.email}</span>
                  </NavLink>
                </li>
                <div className="text-muted pt-2"></div>
              </ListGroup.Item>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
