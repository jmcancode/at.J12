import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faCommentDots,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";
import Container from "react-bootstrap/Container";

import UserHeader from '../components/UserHeader';


class Home extends React.Component {
  constructor(props) {
    super(props);


    const today = new Date(),
    date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    this.state = {
      currentDate: date
    };
  }


  render(){
  return (
    <>
    <UserHeader/>
    <Container className="m-5 pt-5 mx-auto">
      
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-row p-4 ">
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="pl-2">DAY STREAK</div>
        </div>
        <div className="d-flex flex-row-reverse p-4">
          <p>NEWS FEED: {this.state.currentDate} </p>
        </div>
      </div>

      <div className="container d-flex">
        <div className="card">
            <Card>
              <Card.Header>
                <Avatar
                 round={true}
                  size="50"
                   name="Will Binns-Smith" />
              </Card.Header>
              <Card.Img
                variant="top"
                fluid
                src={require("/Users/jon-michaelnarvaez/test-app/src/assets/images/sports031020.jpg")}
              />
              <Card.Body
              style={{backgroudColor: '#ededed', height: 'px' }}
              >
              </Card.Body>

              <Card.Footer>
                <div className=" d-flex justify-content-between text-center">
                  <FontAwesomeIcon icon={faShare} size="lg" />
                  <FontAwesomeIcon icon={faCommentDots} size="lg" />
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </div>
              </Card.Footer>
              </Card>
  
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
                <FontAwesomeIcon icon={faHeart} size="lg" />
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
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
      </Container>
      </>
    
  );
  };
};

export default Home;
