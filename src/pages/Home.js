import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faCommentDots,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Home = (props) => {
  return (
    <>
      <Container>
        <Card className="text-white">
          <Card.Img
            src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            alt="Card image"

          />
          <Card.ImgOverlay className="text-center">
            <Card.Title>James Lewis</Card.Title>
            <Card.Text>BasketBall Team</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <div className="container">
        <Row>
          <Col>
            <Image
              style={{ position: "absolute", zIndex: "1", width:"111px", height: "105px" }}
              roundedCircle={true}
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            />
          </Col>
        </Row>
      </div>
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-row p-4 ">
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="pl-2">DAY STREAK</div>
        </div>
        <div className="d-flex flex-row-reverse p-4">
          <p>NEWS FEED: </p>
        </div>
      </div>
      <div className="container-flex d-flex">
        <div className="card-deck">
          <Row>
            <Card>
              <Card.Header>
                <Avatar round={true} size="50" name="Will Binns-Smith" />
              </Card.Header>
              <Card.Img
                variant="top"
                fluid
                src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
              />
              <Card.Footer>
                <div className=" d-flex justify-content-between text-center">
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <FontAwesomeIcon icon={faCommentDots} size="lg" />
                  <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                </div>
              </Card.Footer>
              </Card>
          </Row>
          <Card>
            <Card.Header>
              <Avatar round={true} size="50" name="James Lewis" />
            </Card.Header>
            <Card.Img
              variant="top"
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            />
            <Card.Footer>
              <div className=" d-flex justify-content-between text-center">
                <FontAwesomeIcon icon={faShare} size="lg" />
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <Avatar round={true} size="50" name="Michael Jordan" />
            </Card.Header>
            <Card.Img
              variant="top"
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
            />
            <Card.Footer>
              <div className=" d-flex justify-content-between text-center">
                <FontAwesomeIcon icon={faShare} size="lg" />
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
