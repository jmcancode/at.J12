import React from "react";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";



const UserHeader = (props) => {
  return (
    <Container className="pt-5">
      <div className="card">
        <Card className="text-white text-center ">
          <Card.Img
            src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="text-center">
            <Card.Title>
              <h1>James Lewis</h1>
            </Card.Title>
            <Card.Text>BasketBall Team</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="container">
        <Row>
          <Col>
            <Image
              style={{
                position: "absolute",
                zIndex: "1",
                width: "auto",
                height: "auto",
              }}
              roundedCircle={true}
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserHeader;
