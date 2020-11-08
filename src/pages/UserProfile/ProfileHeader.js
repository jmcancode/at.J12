import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class ProfileHeader extends React.Component {
  state = {
    firstName: "Emmit",
    lastName: "Gill",
    team: ["Volleyball", "Basketball", "Football", "Swim Team", "Lacrose"],
  };
  render() {
    return (
      <div style={{backgroundColor: "transparent"}} className="text-center">
        <Card
          style={{ borderColor: "transparent" }}
          className="text-white profile"
        >
          <Card.Img
            src={require("../../assets/images/AdobeStock_214628027.jpeg")}
            fluid
          />
          <Card.ImgOverlay style={{backgroundColor: "transparent"}}>
            <Card.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
              {" "}
              {this.state.firstName} {this.state.lastName}{" "}
            </Card.Title>
            <Card.Subtitle>
              {this.state.team[Math.floor(Math.random() * 5)]}
            </Card.Subtitle>
            <Image
              src={require("../../assets/images/image (1).png")}
              alt="userimage"
              roundedCircle
              fluid
            />
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default ProfileHeader;
