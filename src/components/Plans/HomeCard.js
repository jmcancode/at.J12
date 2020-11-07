import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

import "../../pages/Home.css";



const HomeCard = (props) => {
  const { plans } = props;
  return (
    <CardDeck className="card-deck">
      <Card
        style={{ width: "18rem" }}
        className="shadow-lg p-3 mb-5 bg-white rounded mb-lg-3 p-lg-3"
      >
        <Card.Img variant="top" src="https://picsum.photos/640/360?random" />
        <Card.Body>
          <Card.Title style={{ color: "#000000", size: "24px" }}>
            {plans.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {plans.categorySelect}
          </Card.Subtitle>
          <Card.Text style={{ color: "#000000", size: "12px" }}>
            {plans.content}
          </Card.Text>
          <div className="d-flex inline-flex justify-content-center mt-2">
            <Button
              size="sm"
              type="submit"
              style={{ backgroundColor: "#9E7E38", borderColor: "transparent" }}
            >
              Read More
            </Button>
          </div>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default HomeCard;
