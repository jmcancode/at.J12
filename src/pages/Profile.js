import React from "react";

//Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

// Bootstrap components
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// custom css
import "../../src/assets/css/Profile.css";

const Profile = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Card  className="shadow rounded " style={{ height: "100vh" }}>
          <Card.Header>
            <div className="container-flex d-flex justify-content-around">
              <h6 className="ml-5 pl-5 mt-1" style={{ color: "#BF5700" }}>
                Profile
              </h6>
              <div>
                <FontAwesomeIcon
                  style={{ marginLeft: "100%" }}
                  className="mt-1"
                  icon={faCog}
                  size="md"
                />
              </div>
            </div>
          </Card.Header>
          <div className="container-flex">
            <Card.Img
              className="mt-0"
              src={require("../assets/images/AdobeStock_214628027.jpeg")}
            />
            <Card.ImgOverlay
              className="text-white text-center"
              style={{ paddingTop: "21%" }}
            >
              <Card.Title>James Lewis</Card.Title>
              <Card.Text>Football Team</Card.Text>
            </Card.ImgOverlay>
            <Image
              src={require("../assets/images/image (1).png")}
              roundedCircle
              style={{
                width: "128px",
                height: "128px",
                position: "absolute",
                zIndex: "2",
                right: "30%",
                top: "20%",
              }}
            />
          </div>
          <div className="container-flex edit_profile-container pt-2">
            <Card.Body>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label className="text-muted">Name</Form.Label>
                  <Form.Control type="text" placeholder="James Lewis" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-muted">Team</Form.Label>
                  <Form.Control as="select">
                    <option>Football</option>
                    <option>Basketball</option>
                    <option>Track & Field</option>
                    <option>Cross Country</option>
                    <option>Rugby</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label className="text-muted">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="jsmith@university.edu"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label className="text-muted">Phone</Form.Label>
                  <Form.Control type="tel" placeholder="210-987-4530" />
                </Form.Group>
              </Form>
            </Card.Body>
          </div>
        </Card>
      </Container>
    </React.Fragment>
  );
};
export default Profile;
