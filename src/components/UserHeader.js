import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./UserHeader.css";

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
        <container
          className="text-white text-center"
          style={{ height: "170px" }}
        >
          <Card className="border-0">
            <Card.Img
              src={require("../assets/images/AdobeStock_214628027.jpeg")}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title >
                <h1 className="p-0 m-0">James Lewis</h1>
              </Card.Title>
              <Card.Text >Football Team</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </container>
        <div className="container">
          <Image
            style={{
              position: "absolute",
              left: "35%",
              top: "20%",
              zIndex: "1",
              width: "120px",
              height: "120px",
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
