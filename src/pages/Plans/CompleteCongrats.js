import React from "react";
import "../../pages/Home.css";
//reactplayer
import Image from "react-bootstrap/Image";
import { Card, CardBody } from "reactstrap";
import { ImTrophy } from "react-icons/im";


class CompleteCongrats extends React.Component {
  state = {
    title: [
      "Take a moment",
      "Behavioral Health & Wellness and College Athletes Introduction Pt. 1",
      "Behavioral Health & Wellness and College Athletes Introduction Pt. 2",
      "Behavioral Health & Wellness and College Athletes Introduction Pt. 3",
    ],
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
              <div>
                <Image
                  src="https://picsum.photos/640/360?random"
                  style={{ height: "155px", width: "425px" }}
                  fluid
                />
              </div>
              <div>
                <div className="d-flex pt-3 ">
                  <h4>{this.state.title[0]}</h4>
                </div>
                <div className="text-left text-muted">
                  <h6 style={{ fontSize: "12px" }}>{this.state.subTitle}</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2">
                <div>
                  <small className="text-left">back to plans</small>
                </div>

              </div>
              <div className="pt-3">
                <div className="text-center pt-2"><h4 style={{color: "green"}}>Congrats!</h4></div>
                <div className="text-center pt-1"><p>You're done with: {this.state.title[1]}</p></div>
              </div>
              <div className="d-flex justify-content-center"><ImTrophy style={{color: "gold", height: "120px", width: "120px"}}/></div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default CompleteCongrats;
