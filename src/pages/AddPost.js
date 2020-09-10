import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faCamera,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const AddPost = (props) => {
  return (
    <Card className="border-bottom-0">
      <Card.Header>
        <div className="container-flex d-flex">
          <FontAwesomeIcon
          className="mt-2"
           icon={faArrowLeft} 
           size="lg"
           />
          <h6 className="pl-3 mt-2">ADD POST</h6>
        </div>
      </Card.Header>

      <Container>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGroupDescription">
              <Form.Control type="text" placeholder="Want to say something?" />
            </Form.Group>
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
  );
};

export default AddPost;
