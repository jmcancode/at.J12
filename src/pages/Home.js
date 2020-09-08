import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faCommentDots,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";

const Home = (props) => {
  return (
    <>
      <Container className="pt-5 mx-auto">
        <CardDeck>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Img
              variant="top"
              // src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
              fluid
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
            <Card.Header>Header</Card.Header>
            <Card.Img
              variant="top"
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
              fluid
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className=" d-flex justify-content-between text-center">
                <FontAwesomeIcon icon={faShare} size="lg" />
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Img
              variant="top"
              src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
              fluid
            />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
              <div className=" d-flex justify-content-between text-center">
                <FontAwesomeIcon icon={faShare} size="lg" />
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
              </div>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};

export default Home;
