import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';

import '../assets/css/EditProfile.css';

const EditProfile = () => {
  return (
    <Container className="mt-5 pt-3">
    <Card className="border-bottom-0">
      <Card.Header className="d-flex justify-content-between">{''}EDIT PROFILE{''}
      <FontAwesomeIcon className="mt-1" icon={faCog}/>
      
      </Card.Header>
      <Container>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Jane Smith" />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Type out about yourself" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="jsmith@university.edu" />
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="210-454-4340" />
            </Form.Group>
            <Button variant="secondary" as="button" size="md" type="submit" block> Update </Button>
          </Form>
        </Card.Body>
      </Container>
    </Card>
    </Container>
  )
}

export default EditProfile;