import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import PlanCategory from "../components/Plans/PlanCategory";
import PlanHeader from "../components/Plans/PlanHeader";
import Container from "react-bootstrap/Container";

const Plans = (props) => {
  return (
    <>
    <Container className="d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button size="sm" variant="secondary"><Link to="/myplans" style={{color: "#b57000"}}  >My Plans</Link></Button>
          <Button style={{backgroundColor: "#b57000", borderColor: "transparent"}} size="sm" variant="primary">Discover</Button>
        </ButtonGroup>
      </Container>

    <Container className="mt-lg-5 pt-lg-5 mb-3">
      <div className="shadow rounded mx-3 mt-2 mb-5 pr-3 pb-3 pl-3">
        <PlanHeader />
        <PlanCategory category="Wellness Techniques" />
        <PlanCategory category="Male Athletes" />
        <PlanCategory category="Female Athletes" />
        <PlanCategory category="Power in Rest" />
      </div>
    </Container>
    </>
  );
};

export default Plans;
