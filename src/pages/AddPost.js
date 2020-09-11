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
  faArrowLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const AddPost = (props) => {
  return (
    <Container className="mt-5 pt-3">
      <Card className="border-0">
        <Card.Header>
          <div className="container-flex d-flex">
            <FontAwesomeIcon className="mt-2" icon={faArrowLeft} size="lg" />
            <h6 className="pl-3 mt-2" style={{ color: "#BF5700" }}>
              ADD POST
            </h6>
          </div>
        </Card.Header>

        <Container>
          <Card.Body>
            <Form>
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
                    Send <FontAwesomeIcon icon={faCaretRight} />
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
        </Container>
      </Card>
    </Container>
  );
};

export default AddPost;
