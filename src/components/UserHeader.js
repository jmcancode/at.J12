import React from "react";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";

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
        <div className="container">
          <Card className="text-white text-center ">
            <Card.Img
              src={require("../assets/images/image (3).png")}
              alt="Card image"
            />
            <Card.ImgOverlay className="text-center">
              <Card.Title>
                <h1 className="pt-0" style={{ fontSize: "30px" }}>
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
              borderColor: "#fff",
              position: "absolute",
              zIndex: "1",
              width: "120px",
              height: "125px",
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
