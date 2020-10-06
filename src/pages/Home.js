import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "reactstrap";

// import firebase from "../Firebase/Firebase.utils";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      modal: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      // this.addChannel();
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {/* <div className="container-flex">
        </div> */}
        <container>
          <div className=" container">
            <div className="container d-flex justify-content-between text-center mb-3">
              <div className="container-flex d-flex pt-5">
                <div className="pb-1">
                  <FontAwesomeIcon color="gold" icon={faStar} size="lg" />
                </div>
                <div className="pl-2 pt-1 day_streak">
                  {" "}
                  {this.setState} 34 DAY STREAK
                </div>
              </div>
              <div className="mt-5 pt-1 new_feed">
                <p>NEWS FEED: {this.state.currentDate} </p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column container-fluid">
                <Card className="shadow mb-5 ">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <p className="user-title">
                        {""}WELLNESS TECHNIQUES{""}
                      </p>
                      <p className="user-subtitle ">Conqoruing Machismo</p>
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
                    className="mt-0 rounded-0"
                  />

                  <Card.Footer className="border-top-0">
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faHeart}
                          size="sm"
                        />{" "}
                        9k
                      </Button>
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsUp}
                          size="sm"
                          onChange={this.handleChange}
                        />{" "}
                        12.5k
                      </Button>

                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsDown}
                          size="sm"
                        />{" "}
                        12
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>

                <Card className="shadow mb-5">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <div className="container-row">
                        <p className="user-title">
                          {""}WELLNESS TECHNIQUES{""}
                        </p>
                        <p className="user-subtitle ">Conqoruing Machismo</p>
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
                    className="mt-0 rounded-0"
                  />

                  <Card.Footer className="border-top-0">
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faHeart}
                          size="sm"
                        />{" "}
                      9k
                    </Button>
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsUp}
                          size="sm"
                          onChange={this.handleChange}
                        />{" "}
                      12.5k
                    </Button>

                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsDown}
                          size="sm"
                        />{" "}
                      12
                    </Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card className="shadow mb-5">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <div className="container-row">
                        <p className="user-title">
                          {""}WELLNESS TECHNIQUES{""}
                        </p>
                        <p className="user-subtitle ">Conqoruing Machismo</p>
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
                    className="mt-0 rounded-0"
                  />

                  <Card.Footer className="border-top-0">
                    <div className=" d-flex justify-content-between text-center">
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faHeart}
                          size="sm"
                        />{" "}
                    9k
                  </Button>
                      <Button>
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsUp}
                          size="sm"
                          onChange={this.handleChange}
                        />{" "}
                    12.5k
                  </Button>

                      <Button
                        onClick={() =>
                          this.setState({ count: this.state.count + 1 })
                        }
                      >
                        <FontAwesomeIcon
                          className="home-icon"
                          icon={faThumbsDown}
                          size="sm"
                        />{" "}
                    12
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
