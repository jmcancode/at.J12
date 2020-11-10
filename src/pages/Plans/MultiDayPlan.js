import React from "react";
// custom css
import "../Home.css";
// bootstrap + reactstrap components
import Image from "react-bootstrap/Image";
import LikeButton from "../../components/Buttons/LikeButton";
import { Card, CardBody, Button, ButtonGroup } from "reactstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";

class MultiDay extends React.Component {
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
                  <div
                    style={{
                      display: "flex",
                      position: "absolute",
                      paddingLeft: "79%",
                    }}
                  >
                    <LikeButton />
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
                <div className="pt-3">
                  <TabContainer>
                    <Tabs defaultActiveKey="Day1" id="uncontrolled-tab-example">
                      <Tab eventKey="Day1" title="Day 1">
                        <div style={{ fontWeight: "bold" }} className="pt-2 pb-1">
                          {this.state.title[1]}
                        </div>
                        <div className="pt-2">{this.state.content}</div>
                        <div>
                          <ButtonGroup className="d-flex justify-content pt-3">
                            <Button>Finish Day 1</Button>
                            <Button>Finish Plan</Button>
                          </ButtonGroup>
                        </div>
                      </Tab>
                      <Tab eventKey="Day2" title="Day 2">
                        <div style={{ fontWeight: "bold" }} className="pt-2 pb-1">
                          {this.state.title[2]}
                        </div>
                        <div className="pt-2">{this.state.content}</div>
                        <div>
                          <ButtonGroup className="d-flex justify-content pt-3">
                            <Button>Finish Day 2</Button>
                            <Button>Finish Plan</Button>
                          </ButtonGroup>
                        </div>
                      </Tab>
                      <Tab eventKey="Day3" title="Day 3">
                        <div style={{ fontWeight: "bold" }} className="pt-2 pb-1">
                          {this.state.title[3]}
                        </div>
                        <div className="pt-2">{this.state.content}</div>
                        <div>
                          <ButtonGroup className="d-flex justify-content pt-3">
                            <Button>Finish Day 3</Button>
                            <Button>Finish Plan</Button>
                          </ButtonGroup>
                        </div>
                      </Tab>
                    </Tabs>
                  </TabContainer>
                </div>
              </CardBody>
            </Card>
          </div>
        </>
      );
    }
  }
  
  export default MultiDay;
