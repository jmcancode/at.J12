import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import '../assets/css/Settings.css';

const Settings = () => {
  return (
    <div className="container-sm-flex mt-2 pt-1" >
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <Card style={{ width: "50rem" }}>
            <Card.Header className="text-center" style={{ color: "#b5700b" }}>SETTINGS</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <div className="pt-4">Push Notifications</div>
                <Form>
                  <Form.Check type="switch" id="custom-switch" label="" />
                </Form>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="/edit-profile">Edit Profile</a>
              </ListGroup.Item>
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={ListGroup.Item} eventKey="1" className="border-0">
                  Privacy Policy
              </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi. Nulla porttitor accumsan tincidunt. Donec
                    rutrum congue leo eget malesuada. Proin eget tortor risus.
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Vivamus magna justo, lacinia eget consectetur sed, convallis
                    at tellus. Donec sollicitudin molestie malesuada. Sed
                    porttitor lectus nibh. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor at sem. Cras ultricies ligula sed
                    magna dictum porta. Pellentesque in ipsum id orci porta
                    dapibus. Curabitur aliquet quam id dui posuere blandit.
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                    sit amet dui. Proin eget tortor risus. Vivamus magna justo,
                    lacinia eget consectetur sed, convallis at tellus. Quisque
                    velit nisi, pretium ut lacinia in, elementum id enim.
                    Curabitur aliquet quam id dui posuere blandit. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Praesent sapien
                    massa, convallis a pellentesque nec, egestas non nisi. Cras
                    ultricies ligula sed magna dictum porta. Pellentesque in ipsum
                    id orci porta dapibus. Quisque velit nisi, pretium ut lacinia
                    in, elementum id enim. Curabitur aliquet quam id dui posuere
                    blandit. Vestibulum ac diam sit amet quam vehicula elementum
                    sed sit amet dui. Quisque velit nisi, pretium ut lacinia in,
                    elementum id enim. Proin eget tortor risus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Vivamus magna justo,
                    lacinia eget consectetur sed, convallis at tellus. Vestibulum
                    ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Nulla quis lorem ut libero malesuada feugiat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent sapien
                    massa, convallis a pellentesque nec, egestas non nisi.
                    Curabitur aliquet quam id dui posuere blandit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Nulla quis
                    lorem ut libero malesuada feugiat. Proin eget tortor risus.
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Pellentesque in ipsum id orci porta dapibus.
                    Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Nulla quis lorem ut libero
                    malesuada feugiat. Quisque velit nisi, pretium ut lacinia in,
                    elementum id enim. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Pellentesque in ipsum id
                    orci porta dapibus. Donec sollicitudin molestie malesuada.
                    Proin eget tortor risus. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Praesent sapien massa,
                    convallis a pellentesque nec, egestas non nisi. Mauris blandit
                    aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                    accumsan tincidunt. Donec rutrum congue leo eget malesuada.
                    Donec sollicitudin molestie malesuada. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor at sem. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                    sit amet ligula. Proin eget tortor risus. Curabitur arcu erat,
                    accumsan id imperdiet et, porttitor at sem. Cras ultricies
                    ligula sed magna dictum porta. Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Nulla quis lorem ut
                    libero malesuada feugiat. Sed porttitor lectus nibh. Cras
                    ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor at sem. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui. Vivamus magna justo,
                    lacinia eget consectetur sed, convallis at tellus. Vestibulum
                    ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Cras ultricies ligula sed magna dictum porta. Curabitur non
                    nulla sit amet nisl tempus convallis quis ac lectus. Curabitur
                    aliquet quam id dui posuere blandit. Nulla porttitor accumsan
                    tincidunt. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed
                    porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo, lacinia eget consectetur sed, convallis at tellus.
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Quisque velit nisi, pretium ut lacinia in, elementum
                    id enim. Cras ultricies ligula sed magna dictum porta. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    aliquet quam id dui posuere blandit. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim. Nulla porttitor
                    accumsan tincidunt. Nulla porttitor accumsan tincidunt. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                    blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Proin eget tortor risus. Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus.
                </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup>

            <ListGroup.Item>
            <a href="/">Sign out</a>
          </ListGroup.Item>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Settings;
