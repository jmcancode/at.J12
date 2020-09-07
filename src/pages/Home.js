import React from "react";
import "./Home.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Col,
} from "reactstrap";
import Image from 'react-bootstrap/Image'

const Home = (props) => {
  return (
    <>
      <Container
        className="pt-5 pl-5 m-5"
        style={{ backgroundColor: "#ededed", width: "18 rem", height: "20 rem" }}
      >
        <row >
          <Col xs={12}>
          <Container fluid="xs" >
            <Card className="text-center">
              <CardHeader className="p-4">
                <Image
                  width={120}
                  height={120}
                  className="mr-3"
                  src="/src/assets/images/sports031020.jpg"
                  alt="Avatar"
                  roundedCircle
                  thumbnail
                  />
                <p>First Name</p>
                <p>Athletic Team</p>
              </CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </CardBody>
              <CardFooter>
                <span className="fa-stack fa">
                  <i className="fas fa-share fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-comment-dots fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-thumbs-up fa-stack-2x"></i>
                </span>
              </CardFooter>
            </Card>
            </Container>

            <Container>
            <Card className="text-center">
              <CardHeader>
              <img
                width={120}
                height={120}
                className="mr-3"
                src="/src/assets/images/sports031020.jpg"
                alt="Avatar"
              />
              </CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </CardBody>
              <CardFooter>
                <span className="fa-stack fa">
                  <i className="fas fa-share fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-comment-dots fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-thumbs-up fa-stack-2x"></i>
                </span>
              </CardFooter>
            </Card>
            </Container>

            <Container>
            <Card className="text-center">
              <CardHeader tag="h3">
              <img
                width={120}
                height={120}
                className="mr-3"
                src="/src/assets/images/sports031020.jpg"
                alt="Avatar"
              />
              </CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </CardBody>
              <CardFooter>
                <span className="fa-stack fa">
                  <i className="fas fa-share fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-comment-dots fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-thumbs-up fa-stack-2x"></i>
                </span>
              </CardFooter>
            </Card>
            </Container>

            <Container>
            <Card className="text-center">
              <CardHeader>
              <img
                width={120}
                height={120}
                className="mr-3"
                src="/src/assets/images/sports031020.jpg"
                alt="Avatar"
              />
              </CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </CardBody>
              <CardFooter>
                <span className="fa-stack fa">
                  <i className="fas fa-share fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-comment-dots fa-stack-2x"></i>
                </span>
                <span className="fa-stack fa">
                  <i className="fas fa-thumbs-up fa-stack-2x"></i>
                </span>
              </CardFooter>
            </Card>
            </Container>
            </Col>
        </row>
      </Container>
    </>
  );
};

export default Home;
