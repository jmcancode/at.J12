import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Media from "react-bootstrap/Media";

export default function CompletedPlans() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button
            style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            size="sm"
            variant="primary"
          >
          <Link style={{color: "#fff"}} to="/myplans">
            My Plans
            </Link>
          </Button>
          <Button size="sm" variant="secondary">
            <Link style={{ color: "#b57000" }} to="/discover">
              Discover
            </Link>
          </Button>
        </ButtonGroup>
      </Container>

      <Container className="mt-lg-5 pt-lg-5 mb-3">
        <div className="shadow m-2">
          <div className="container-fluid d-flex">
            <Card className="border-0">
              <Card.Title className="d-flex justify-content-center text-muted pt-3">
                Completed
              </Card.Title>
              <ul className="list-unstyled">
                <Media as="li">
                  <img
                    width={65}
                    height={65}
                    className="mr-3"
                    src="https://picsum.photos/640/360?random"
                    alt="random"
                  />
                  <Media.Body>
                    <h5 style={{ fontSize: "12px" }}> Title 1 </h5>
                    <ProgressBar
                      style={{ height: "10px", width: "50%" }}
                      variant="success"
                      animated
                      now={100}
                    />
                  </Media.Body>
                </Media>

                <Media as="li">
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://picsum.photos/640/360?random"
                    alt="#"
                  />
                  <Media.Body>
                    <h5 style={{ fontSize: "12px" }}> Title 2 </h5>
                    <ProgressBar
                      style={{ height: "10px", width: "50%" }}
                      variant="success"
                      animated
                      now={100}
                    />
                  </Media.Body>
                </Media>

                <Media as="li">
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://picsum.photos/640/360?random"
                    alt="#"
                  />
                  <Media.Body>
                    <h5 style={{ fontSize: "12px" }}> Title 3 </h5>
                    <ProgressBar
                      style={{ height: "10px", width: "50%" }}
                      variant="success"
                      animated
                      now={100}
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
