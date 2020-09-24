import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "../assets/css/EditProfile.css";

const EditProfile = () => {
  return (
    <Container>
      <Card className="border-bottom-0">
          <div className="card-body">
            <Form className="pt-1">
              
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="jlewis@university.edu"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="old password" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label> New Password</Form.Label>
                <Form.Control type="password" placeholder="new password" />
              </Form.Group>
              <Button
                variant="secondary"
                as="button"
                size="sm"
                type="submit"
                block
              >
                {" "}
                Update{" "}
              </Button>
            </Form>
          </div>
      </Card>
    </Container>
  );
};

export default EditProfile;
