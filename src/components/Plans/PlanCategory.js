import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import PlanCard from "./PlanCard";
import "./PlanHeader.css";
import Slider from "react-slick";
import {connect} from "react-redux";

import "../../assets/css/PlanCategory.css";


//---- CUSTOM SLIDER ARROWS STARTS ----//
function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#BF5700",
        borderRadius: "50%",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#BF5700",
        borderRadius: "50%",
      }}
    />
  );
}

const settings = {
  arrows: false,
  dots: false,
  draggable: true,
  infinite: true,
  speed: 500,
  rows: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 413,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const PlanCategory = (props) => {
  const { plans } = props;
  return (
    <div className="border-bottom mb-4">
      <header className="d-flex align-items-center justify-content-between">
      </header>
      <CardDeck className="my-2">
        <Slider {...settings} className="container">
          <PlanCard
            image="https://picsum.photos/640/360?random"
            title={plans.title}
            summary={plans.content}
          />
        </Slider>
      </CardDeck>
    </div>
  );
};

export default connect()(PlanCategory);
