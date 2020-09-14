import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import PlanCard from './PlanCard';
import './PlanHeader.css';
import Slider from "react-slick";


//---- CUSTOM SLIDER ARROWS STARTS ----//
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#BF5700", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#BF5700", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}
//---- CUSTOM SLIDER ARROWS ENDS ----//


class PlanCategory extends React.Component {
  render() {

    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 2,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div>
        <header className="d-flex align-items-center justify-content-between">
          <h6>WELLNESS TECHNIQUES</h6>
          <p>view all</p>
        </header>

        <CardDeck>
          <Slider {...settings}>
            <PlanCard
              image="https://picsum.photos/640/360?random=1"
              title="Take a Moment"
              summary="Techniques for practicing mindfulness."
            />
            <PlanCard
              image="https://picsum.photos/640/360?random=2"
              title="Finding Peace"
              summary="Techniques for practicing mindfulness."
            />
            <PlanCard
              image="https://picsum.photos/640/360?random=3"
              title="Importance of Rest"
              summary="Techniques for resting and feeling afreshed."
            />
            <PlanCard
              image="https://picsum.photos/640/360?random=4"
              title="Take a Moment"
              summary="Techniques for practicing mindfulness."
            />
            <PlanCard
              image="https://picsum.photos/640/360?random=5"
              title="Take a Moment"
              summary="Techniques for practicing mindfulness."
            />
          </Slider>
        </CardDeck>
      </div>
    );
  }
}

export default PlanCategory;
