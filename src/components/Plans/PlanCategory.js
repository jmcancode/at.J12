import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import PlanCard from './PlanCard';
import './PlanHeader.css';
import Slider from "react-slick";
import { db } from "../../Firebase/Firebase.utils";

import '../../assets/css/PlanCategory.css';


//---- CUSTOM SLIDER ARROWS STARTS ----//
function SampleNextArrow(props) {
  const { className, style, } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#BF5700", borderRadius: "50%" }}

    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#BF5700", borderRadius: "50%" }}

    />
  );
}

class PlanCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: auth().currentUser,
      articles: [],
      content: '',
      readError: null,
      writeError: null
    };
  }
  componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("articles").on("value", snapshot => {
        let articles = [];
        snapshot.forEach((snap) => {
          console.log(snap)
          articles.push(snap.val());
        });
        this.setState({ articles });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  render() {
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

    return (
      <div className="border-bottom mb-4">
        <header className="d-flex align-items-center justify-content-between">
          <h6 className="font-weight-bold text-uppercase">{this.props.category}</h6>
          <p className="mb-0">view all</p>
        </header>

        <CardDeck className="my-2">
          <Slider {...settings} className="container">

            {this.state.articles.map(article => {
              return <div key={article.createdDate}>
                <PlanCard

                  image="https://picsum.photos/640/360?random"
                  title={article.title}
                  summary={article.content}
                />
              </div>
            })}
          </Slider>

        </CardDeck>
      </div>
    );
  }
}

export default PlanCategory;
