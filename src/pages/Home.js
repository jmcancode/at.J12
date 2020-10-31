import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Firestore from "../Firebase/Firebase.utils";

import HeartButton from "../components/Buttons/LikeButton";
import ThumbsUp from "../components/Buttons/ThumbsUp";
import ThumbsDown from "../components/Buttons/ThumbsDown";

// import firebase from "../Firebase/Firebase.utils";

class Home extends React.Component {
  constructor(props) {
    super(props);

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
        <Container>
          <div className=" container mt-4 mb-5">
            <div className="container pt-lg-5 px-0 mt-lg-5 d-flex justify-content-between text-center mb-3">
              <div className="container-flex d-flex ">
                <div className="pb-1">
                  <FontAwesomeIcon color="gold" icon={faStar} size="lg" />
                </div>
                <div className="pl-2 pt-1 day_streak"> DAY STREAK</div>
              </div>
              <div className="pt-1 new_feed">
                <p> {this.state.currentDate} </p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column w-lg-75">
                <Card className="shadow mb-5 ">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <p className="user-title">Male Athletes</p>
                      <p className="user-subtitle mb-0">Conquering Machismo</p>
                    </div>
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={"https://picsum.photos/640/360?random"}
                    className="mt-0 rounded-0"
                  />
                  <Card.Footer className="border-top-0">
                    <div>
                      <p className="py-2 text-muted">
                        We've all heard it, "Ego, bigger than..."
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <HeartButton />
                      <ThumbsUp />
                      <ThumbsDown />
                    </div>
                  </Card.Footer>
                </Card>
                <Card className="shadow mb-5">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <div className="container-row">
                        <p className="user-title">Mind & Body</p>
                        <p className="user-subtitle mb-0">Take a walk</p>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={"https://picsum.photos/640/360?random"}
                    className="mt-0 rounded-0"
                  />
                  <Card.Footer className="border-top-0">
                    <div>
                      <p className="py-2 text-muted">
                        Study finds 30 minutes outside in nature can...
                      </p>
                    </div>
                    <div className=" d-flex justify-content-between mt-2">
                      <HeartButton />
                      <ThumbsUp />
                      <ThumbsDown />
                    </div>
                  </Card.Footer>
                </Card>
                <Card className="shadow mb-5">
                  <Card.Header className="border-bottom-0">
                    <div>
                      <div className="container-row">
                        <p className="user-title"> Female Athletes</p>
                        <p className="user-subtitle mb-0">Finding peace in defeat</p>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={"https://picsum.photos/640/360?random"}
                    className="mt-0 rounded-0"
                  />
                  <Card.Footer className="border-top-0">
                    <div>
                      <p className="py-2 text-muted">
                        Rough week? Read this article on how we find peace in defeat.
                      </p>
                    </div>
                    <div className=" d-flex justify-content-between mt-2">
                      <HeartButton />
                      <ThumbsUp />
                      <ThumbsDown />
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
