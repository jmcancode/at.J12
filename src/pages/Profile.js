import React from "react";
import UserHeader from "../components/UserHeader";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-5 pt-3">
        <Card className="border-bottom-0">
          <Card.Header>
            <div className="container-flex d-flex">
              <FontAwesomeIcon className="mt-2" icon={faArrowLeft} size="lg" />
              <h6 className="pl-3 mt-2" style={{ color: "#BF5700" }}>
                Profile
              </h6>
            </div>
          </Card.Header>
          <UserHeader />
          <Container>
            <Card.Body>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="James Lewis" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Choose your sport</Form.Label>
                  <Form.Control as="select">
                    <option>Football</option>
                    <option>Basketball</option>
                    <option>Track & Field</option>
                    <option>Cross Country</option>
                    <option>Rugby</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="jsmith@university.edu"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="210-987-4530" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Container>
        </Card>
      </Container>
    </React.Fragment>
  );
};
export default Profile;
