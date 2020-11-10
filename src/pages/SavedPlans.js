import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Media from "react-bootstrap/Media";


class SavedPlans extends React.Component {
  state = {
    title: [
      "Social Justice",
      "Personal Development",
      "Gender",
      "Pro Sports",
      "Wellness",
      "Mental Health",
      "Life Skills",
      "Ethnicity",
    ],
  };
  render() {
    return (
      <>
        <Container className="d-flex justify-content-center mt-lg-5 pt-lg-5">
          <ButtonGroup aria-label="Basic example">
            <Button
              style={{ backgroundColor: "#9E7E38", borderColor: "transparent" }}
              size="sm"
            >
              <Link style={{ color: "#fff" }} to="/watchlater">
                My Plans
              </Link>
            </Button>
            <Button size="sm" variant="secondary">
              <Link style={{ color: "#fff" }} to="/discover">
                Discover
              </Link>
            </Button>
          </ButtonGroup>
        </Container>

        <Container
          className="mt-lg-5 pt-lg-5 mb-3"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="shadow m-2">
            <div className="container-fluid d-flex">
              <Card
                style={{ backgroundColor: "transparent" }}
                className="border-0"
              >
                <Card.Title
                  style={{ color: "#fff" }}
                  className="d-flex justify-content-center pt-3"
                >
                  Watch Later
                </Card.Title>
                <ul className="list-unstyled">
                  <Media as="li">
                    <img
                      width={65}
                      height={65}
                      className="mr-3 fluid"
                      src="https://picsum.photos/640/360?random"
                      alt="random"
                    />
                    <Media.Body>
                      <h5 className="text-white" style={{ fontSize: "12px" }}> {this.state.title[Math.floor(Math.random() * 8)]} </h5>
                      <ProgressBar
                        style={{ height: "10px", width: "50%" }}
                        variant="success"
                        animated
                        now={0}
                      />
                    </Media.Body>
                  </Media>

                  <Media as="li">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 fluid"
                      src="https://picsum.photos/640/360?random"
                      alt="#"
                    />
                    <Media.Body>
                      <h5 className="text-white" style={{ fontSize: "12px" }}> {this.state.title[Math.floor(Math.random() * 8)]}</h5>
                      <ProgressBar
                        style={{ height: "10px", width: "50%" }}
                        variant="success"
                        animated
                        now={0}
                      />
                    </Media.Body>
                  </Media>

                  <Media as="li">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 fluid"
                      src="https://picsum.photos/640/360?random"
                      alt="random"
                    />
                    <Media.Body>
                      <h5 className="text-white" style={{ fontSize: "12px" }}> {this.state.title[Math.floor(Math.random() * 7)]} </h5>
                      <ProgressBar
                        style={{ height: "10px", width: "50%" }}
                        variant="success"
                        animated
                        now={0}
                      />
                    </Media.Body>
                  </Media>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default SavedPlans;
