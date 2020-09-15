import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import {
  faImages,
  faCamera,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/AddPost.css";

const AddPost = (props) => {
  return (
    <Container>
      <div className="container card-container">
        <Card className="border" style={{height: '100vh'}}>
          <Card.Header>
            <div className="container-flex d-flex">
              <h6 className="mx-auto mt-1" style={{ color: "#BF5700" }}>
                ADD POST
              </h6>
            </div>
          </Card.Header>

          <div className="container-flex">
            <Card.Body>
              <Form className="form">
                <InputGroup className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Whats on your mind?"
                    aria-label="Whats on your mind?"
                  />
                  <InputGroup.Append>
                    <Button
                      style={{
                        backgroundColor: "#BF5700",
                        borderColor: "transparent",
                      }}
                    >
                      Send <FontAwesomeIcon icon={faCaretRight} size="lg" />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
              <div className="container-flex d-flex justify-content-between">
                <div className="container-flex d-flex">
                  <FontAwesomeIcon icon={faCamera} size="lg" />
                  <p className="pl-2">Add Video</p>
                </div>
                <div className="container-flex d-flex justify-content-between">
                  <div className="container-flex d-flex">
                    <FontAwesomeIcon icon={faImages} size="lg" />
                    <p className="pl-2">Add Photo</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default AddPost;
