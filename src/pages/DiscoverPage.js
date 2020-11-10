import React from "react";
import "../pages/Home.css";
// PlanCard
import PlanCard from "../components/Plans/PlanCard";
// import Image from "react-bootstrap/Image";
import { Card, CardBody } from "reactstrap";
import CardDeck from "react-bootstrap/CardDeck";
// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoCard from "../pages/Plans/VideoCard";
import CategoryHeader from "./Plans/CategoryHeader";
import {Link} from "react-router-dom";

class Plans extends React.Component {
  state = {
    playing: false,
  };
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <CardDeck>
            <Card
              className="mx-1 shadow rounded  border"
              style={{ height: "100vh" }}
            >
              <CategoryHeader />
              <CardBody>
                <div className=" container d-inline-flex flex-row justify-content-between ">
                  <header>
                    <h4
                      className="pt-2"
                      style={{
                        fontSize: "12px",
                        fontFamily: "Graduate",
                        fontWeight: "bold",
                      }}
                    >
                      WELLNESS TECHNIQUES
                    </h4>
                  </header>
                  <div>
                    <small className="text-muted"><Link to={"/catsection"} style={{color: "#9E7E38"}}>view all</Link></small>
                  </div>
                </div>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  partialVisbile={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={false}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  // autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  // dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <PlanCard />
                  <VideoCard />
                  <PlanCard />
                  <PlanCard />
                  <PlanCard />
                  <VideoCard />
                  <PlanCard />
                </Carousel>
                <div className="pt-3">
                  <div className=" container border-top d-flex justify-content-between">
                    <header>
                      <h4
                        className="pt-2"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Graduate",
                          fontWeight: "bold",
                        }}
                      >
                        MALE ATHLETES
                      </h4>
                    </header>
                    <div className="">
                      <small className="text-muted">view all</small>
                    </div>
                  </div>
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    partialVisbile={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div>
                      <PlanCard />
                    </div>
                    <div>
                      <VideoCard />
                    </div>
                    <div>
                      <PlanCard />
                    </div>
                    <div>
                      <PlanCard />
                    </div>
                    <div>
                      <PlanCard />
                    </div>
                    <div>
                      <VideoCard />
                    </div>
                    <div>
                      <PlanCard />
                    </div>
                  </Carousel>
                </div>
                <div className="pt-3">
                  <div className=" container d-flex border-top justify-content-between">
                    <header>
                      <h4
                        className="pt-2"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Graduate",
                          fontWeight: "bold",
                        }}
                      >
                        FEMALE ATHLETES
                      </h4>
                    </header>
                    <div className="">
                      <small className="text-muted">view all</small>
                    </div>
                  </div>
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    partialVisbile={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <PlanCard />
                    <VideoCard />
                    <PlanCard />
                    <PlanCard />
                    <PlanCard />
                    <VideoCard />
                    <PlanCard />
                  </Carousel>
                </div>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </>
    );
  }
}

export default Plans;
