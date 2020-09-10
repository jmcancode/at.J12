import React from "react";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";
import { Container } from "reactstrap";

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Card className="text-white text-center" style={{ height: "170px" }}>
            <Card.Img
              src={require("../assets/images/AdobeStock_214628027.jpeg")}
              alt="Card image"
            />
            <Card.ImgOverlay className="text-center">
              <Card.Title>
                <h1
                  style={{
                    fontSize: "25px",
                    position: "absolute",
                    top: "7%",
                    left: "32.5%",
                  }}
                >
                  James Lewis
                </h1>
              </Card.Title>
              <Card.Text>Football Team</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="container">
          <Image
            style={{
              position: "absolute",
              left: "35%",
              top: "20%",
              zIndex: "1",
              width: "128px",
              height: "128px",
            }}
            roundedCircle={true}
            src={require("../assets/images/image (1).png")}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default UserHeader;
