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

import UserHeader from "../components/UserHeader";
import { Button } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // NEWS FEED
    const today = new Date(),
      date =
        today.getMonth() +
        1 +
        "/" +
        today.getDate() +
        "/" +
        today.getFullYear();
    this.state = {
      currentDate: date,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-flex">
          <UserHeader />
        </div>
        <container>
          <div className=" container">
            <div className="container d-flex justify-content-between text-center pb-3">
              <div className="container-flex d-flex pt-5">
                <div className="pb-1">
                  <FontAwesomeIcon color="gold" icon={faStar} size="lg" />
                </div>
                <div className="pl-2 pt-1 day_streak">
                  {" "}
                  {this.setState} 34 DAY STREAK
                </div>
              </div>
              <div className=" mt-5 pt-1 new_feed">
                <p>NEWS FEED: {this.state.currentDate} </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="card-deck">
                <Card className="card-container-user">
                  <Card.Header>
                    <div>
                      <Avatar
                        value="Will"
                        fgColor="#fff"
                        round={true}
                        size="50"
                        name="Will Binns-Smith"
                      />
                      <div className="container-row">
                        <p className="user-title">
                          {""}Will Binns-Smith{""}
                        </p>
                        <p className="user-subtitle ">Golf Team</p>
                      </div>
                    </div>
                    <div>
                      <p className="user-copy">
                        Wow, what an article! I never thought I would need...
                      </p>
                    </div>
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    fluid
                    src={require("../assets/images/image (2).png")}
                  />

                  <Card.Footer>
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faShare}
                          size="sm"
                        />{" "}
                        10
                      </Button>
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faCommentDots}
                          size="sm"
                        />{" "}
                        12
                      </Button>
                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faHeart}
                          size="sm"
                        />{" "}
                        1.5k
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>

                <Card className="card-container-user">
                  <Card.Header>
                    <Avatar round={true} size="50" name="James Lewis" />
                    <div className="container-row">
                      <p className="user-title">
                        {""}James Lewis{""}
                      </p>
                      <p className="user-subtitle ">Basketball Team</p>
                    </div>

                    <p className="pt-1">
                      Wow, what an article! I never thought I would need...
                    </p>
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={require("../assets/images/image (2).png")}
                  />
                  <Card.Footer>
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon icon={faShare} size="sm" /> 10
                      </Button>
                      <Button>
                        <FontAwesomeIcon icon={faCommentDots} size="sm" /> 12
                      </Button>
                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon icon={faHeart} size="sm" /> 1.5k
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card className="card-container-user">
                  <Card.Header>
                    <Avatar round={true} size="50" name="Michael Jordan" />
                    <div className="container-row">
                      <p className="user-title">
                        {""}Michael Jordan{""}
                      </p>
                      <p className="user-subtitle ">Baseball Team</p>
                    </div>
                    <p className="pt-1">
                      Wow, what an article! I never thought I would need...
                    </p>
                  </Card.Header>

                  <Card.Img
                    variant="top"
                    src={require("../assets/images/image (2).png")}
                  />
                  <Card.Footer>
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon
                          onClick={() =>
                            this.setState({ count: this.state.count + 1 })
                          }
                          icon={faShare}
                          size="sm"
                        />
                        10
                      </Button>
                      <Button>
                        <FontAwesomeIcon icon={faCommentDots} size="sm" /> 12
                      </Button>
                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon icon={faHeart} size="sm" /> 1.5k
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </container>
      </React.Fragment>
    );
  }
}

export default Home;
