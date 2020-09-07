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

const Home = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-row p-4 bd-highlight">
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="pl-2">DAY STREAK</div>
        </div>
        <div className="d-flex flex-row-reverse bd-highlight p-4">
          <p>NEWS FEED: </p>
        </div>
      </div>
      <div className="container pt-2 d-flex">
        <div className="card-columns">
          <div className="card">
            <Card.Header>
              <Avatar
                title="Michael Jackson"
                size="50"
                round={true}
                facebook-id="invalidfacebookusername"
                src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              />
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
          </div>
          <Card>
            <Card.Header>
              <Avatar
                size="50"
                round={true}
                facebook-id="invalidfacebookusername"
                src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              />
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
              <Avatar
                size="50"
                round={true}
                facebook-id="invalidfacebookusername"
                src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              />
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
