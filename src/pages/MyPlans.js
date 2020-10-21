import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Media from "react-bootstrap/Media";

export default function MyPlans() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button style={{backgroundColor: "#b57000", borderColor: "transparent"}} size="sm" variant="primary">My Plans</Button>
          <Button size="sm" variant="secondary">
            <Link style={{color: "#b57000"}} to="/plans">Discover</Link>
          </Button>
        </ButtonGroup>
      </Container>

      <Container style={{ heigh: "100%" }} className="mt-lg-5 pt-lg-5 mb-3">
        <div className="shadow m-2">
          <div>
            <Card className="border-0">
              <Card.Title className="d-flex justify-content-center text-muted pt-1">
                My Plans
              </Card.Title>
              <ul className="list-unstyled">
                <Media as="li">
                  <img
                    width={25}
                    height={65}
                    className="mr-3"
                    src="https://picsum.photos/640/360?random"
                    alt="#"
                  />
                  <Media.Body>
                    <p style={{ fontSize: "12px" }}>Male Athletes</p>
                    <ProgressBar style={{width: "80%"}} label="60%" variant="success" animated now={60} />
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
                    <p style={{ fontSize: "12px" }}>Working with Stress</p>
                    <ProgressBar style={{width: "80%"}} label="40%" variant="success" animated now={40} />
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
                    <p style={{ fontSize: "12px" }}>List-based media object</p>
                    <ProgressBar style={{width: "80%"}} label="90%" variant="success" animated now={90} />
                  </Media.Body>
                </Media>
              </ul>
            </Card>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <Link to="/plans" style={{ fontSize: "10px" }}>SAVED PLANS</Link>
            <Link to="/plans" style={{ fontSize: "10px" }}>COMPLETED PLANS</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
