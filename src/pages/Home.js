import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Image from 'react-bootstrap/Image';

const Home = (props) => {
  return (
    <Jumbotron
      className="text-center d-none d-sm-block d-md-block"
   >
   <Image src="/public/images/AdobeStock_214628027.jpeg"/>
      <h1>Let's, talk.</h1>
      <p>
        A safe place for athlete from all backgrounds to reset, reacharge and
        get your mind right.
      </p>
      <p>
        <Button variant="primary" className="mr-2">
          Learn more
        </Button>
        <Button variant="primary" className="btn btn-danger text-white ">
          Get started
        </Button>
      </p>
    </Jumbotron>
  );
};


export default Home;
