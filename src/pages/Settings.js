import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";

import {connect} from "react-redux";
import {signOut} from "../Redux/actions/authActions";

import "../assets/css/Settings.css";

const Settings = (props) => {
  return (
    <>
      <div className="container-sm-flex mt-lg-5 pt-lg-3 mb-3">
        <Container>
          <div className="d-flex justify-content-center mt-2 mt-lg-5">
            <Card style={{ width: "50rem" }}>
              <Card.Header className="text-center" style={{ color: "#b5700b" }}>
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
                <a onClick={props.signOut} href="/login">
                  Sign out
                </a>
                <div className="text-muted pt-2"></div>
              </ListGroup.Item>
            </Card>

          </div>
        </Container>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
return {
  signOut: () => dispatch(signOut())
}
}

export default connect(null, mapDispatchToProps)(Settings)