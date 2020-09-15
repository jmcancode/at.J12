import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";

import "../assets/css/EditProfile.css";

const EditProfile = () => {
  return (
    <Container>
      <Card className="border-bottom-0">
        <Card.Header className="d-inline-flex justify-content-between pl-5">
          <div style={{color: '#b5700b', paddingLeft: '27%', fontFamily: 'Graduate'}}>EDIT PROFILE</div>
        </Card.Header>
        <Container>
          <div className="container-flex">
            <Card.Img
              src={require("../assets/images/AdobeStock_214628027.jpeg")}
            />
            <Card.ImgOverlay
              className="text-white text-center"
              style={{ paddingTop: "21%" }}
            >
              <Card.Title>James Lewis</Card.Title>
              <Card.Text>Football Team</Card.Text>
            </Card.ImgOverlay>
            <FontAwesomeIcon
              style={{
                position: "absolute",
                zIndex: "2",
                top: "36%",
                right: "35%",
              }}
              icon={faEdit}
            />
            <Image
              src={require("../assets/images/image (1).png")}
              roundedCircle
              style={{
                width: "128px",
                height: "128px",
                position: "absolute",
                zIndex: "1",
                right: "30%",
                top: "20%",
              }}
            />
            <FontAwesomeIcon
              style={{
                position: "absolute",
                zIndex: "1",
                top: "30%",
                right: "10%",
              }}
              icon={faEdit}
            />
          </div>
          <div className="card-body">
            <Form className="pt-5">
              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="James Lewis" />
              </Form.Group>
              <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Bio" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="jlewis@university.edu"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="210-555-5555" />
              </Form.Group>
              <Button
                variant="secondary"
                as="button"
                size="md"
                type="submit"
                block
              >
                {" "}
                Update{" "}
              </Button>
            </Form>
          </div>
        </Container>
      </Card>
    </Container>
  );
};

export default EditProfile;
