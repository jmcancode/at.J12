import React from "react";
import "../Home.css"
//reactplayer
import ReactPlayer from "react-player";
import LikeButton from "../../components/Buttons/LikeButton";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";

class VideoPlan extends React.Component {
  state = {
    title: "Conquering Maschismo",
    subTitle: "Techniques for practicing mindfullness",
    content:
      "Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus Donec sollicitudin molestie malesuada. Proin eget tortor risus",
      playing: false,
  };
  render() {
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border"
            style={{ height: "100vh" }}
          >
            <CardBody>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url="https://youtu.be/WoW3NZsSkro"
                  
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <div className="d-flex pt-3 ">
                  <h4>{this.state.title}</h4>
                </div>
                <div style={{display:"flex", position: "absolute", paddingLeft: "79%"}}>
                  <LikeButton/>
                  </div>
                <div className="text-left text-muted">
                  <h6 style={{ fontSize: "12px" }}>{this.state.subTitle}</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2">
                <div>
                  <small className="text-left">back to plans</small>
                </div>
                <div>
                  <small className="text-right">view full category</small>
                </div>
              </div>
              <div className="pt-3">{this.state.content}</div>
              <div>
                <ButtonGroup className="d-flex justify-content pt-3">
                  <Button>Finish Day 1</Button>
                  <Button>Finish Plan</Button>
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default VideoPlan;
