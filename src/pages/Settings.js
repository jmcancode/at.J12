import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const Settings = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '50rem' }}>
        <Card.Header className="text-center">SETTINGS</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <div>Push Notifications</div>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
              />
            </Form>
          </ListGroup.Item>
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={ListGroup.Item} eventKey="1">
              Edit Profile
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm your profile</Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={ListGroup.Item} eventKey="2">
              Privacy Policy
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm the Privacy Policy</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Settings;