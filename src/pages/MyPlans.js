import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Media from "react-bootstrap/Media";

const MyPlans = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mt-lg-5 pt-lg-5">
        <ButtonGroup aria-label="Basic example">
          <Button
            style={{ backgroundColor: "#9E7E38", borderColor: "transparent" }}
            size="sm"
            variant="primary"
          >
            My Plans
          </Button>
          <Button size="sm" variant="secondary">
            <Link style={{ color: "#9E7E38" }} to="/discover">
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
                My Plans
              </Card.Title>
              <ul className="list-unstyled">
              <Link to="/:plan_id">
                <Media as="li">
                  <img
                    width={65}
                    height={65}
                    className="mr-3"
                    src="https://picsum.photos/640/360?random"
                    alt="random"
                  />
                  
                  <Media.Body>
                    <h5 style={{ fontSize: "12px" }}> TITLE </h5>
                    <ProgressBar
                      style={{ height: "10px", width: "50%" }}
                      variant="success"
                      animated
                      now={60}
                    />
                  </Media.Body>
                </Media>
                </Link>
              </ul>
            </Card>
          </div>
          <div className="float-left">
            <Link className="text-muted" to="/savedplans" style={{ fontSize: "10px" }}>
              SAVED PLANS
            </Link>
            </div>
            <div className="float-right">
            <Link className="text-muted" to="/completedplans" style={{ fontSize: "10px" }}>
              COMPLETED PLANS
            </Link>
            </div>
        </div>
      </Container>
    </>
  );
}


export default MyPlans;