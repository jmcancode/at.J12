import React from "react";
// REACT-BOOTSTRAP
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class PlanCard extends React.Component {
  state = {
    title: "Take a Moment",
    content: "Techniques for practicing mindfullness",
  };
  render() {
    return (
      <>
        <Card className="mx-auto border-0" style={{ width: "8rem" }}>
          <Card.Body>
            <div>
              <Card.Img
                variant="top"
                className="border-0 mt-0 rounded"
                src="https://picsum.photos/640/360?random"
              />
            </div>
            <Card.Title
              className="pt-2"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              <Link style={{ color: "#9E7E38" }} to={"/multiday"}>
                {" "}
                {this.state.title}{" "}
              </Link>
            </Card.Title>
            <Card.Text
              className="text-muted"
              style={{ fontSize: "10px", fontWeight: "normal" }}
            >
              {this.state.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default PlanCard;
