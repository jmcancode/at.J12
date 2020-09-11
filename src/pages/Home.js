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
        <UserHeader />
        <container>
          <div className="m-5 pt-5 mx-auto">
            <div className="container d-flex justify-content-between text-center">
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

            <div className="d-flex">
              <div className="card-deck">
                <Card>
                  <Card.Header>
                    <div>
                      <Avatar round={true} size="50" name="Will Binns-Smith" />
                    </div>
                    <div>
                      <p className="pt-1">
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

                <Card>
                  <Card.Header>
                    <Avatar round={true} size="50" name="James Lewis" />

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
                <Card>
                  <Card.Header>
                    <Avatar round={true} size="50" name="Michael Jordan" />
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
