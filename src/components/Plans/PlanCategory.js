import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import PlanCard from './PlanCard';
import './PlanHeader.css';
import Slider from "react-slick";
// import { auth } from "../../Firebase/Firebase.utils";
import { db } from "../../Firebase/Firebase.utils";


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
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      rows: 1,
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
          <h6 className="font-weight-bold text-uppercase">{this.props.category}</h6>
          <p mb-0>view all</p>
        </header>


        <CardDeck>
          <Slider {...settings}>
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
