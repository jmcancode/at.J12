import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

class Plans extends React.Component {
  render() {
    return (
      <>
        <Container className="d-flex justify-content-center mt-lg-5 pt-lg-5 ">
          <ButtonGroup aria-label="Basic example">
            <Button size="sm" variant="secondary">
              <Link to="/watchlater" style={{ color: "#fff" }}>
                My Plans
              </Link>
            </Button>
            <Button
              style={{ backgroundColor: "#9E7E38", borderColor: "transparent" }}
              size="sm"
              variant="primary"
            >
              Discover
            </Button>
          </ButtonGroup>
        </Container>
      </>
    );
  }
}

export default Plans;
