import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";
import Button from "react-bootstrap/Button";
import LikeButton from "../components/Buttons/LikeButton";
import LoadingSpinner from "../components/Spinner";
import "../components/Buttons/LikeButton.css";
import Axios from "axios";

class SinglePlan extends Component {
  state = {
    plans: null,
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    Axios.get('https://firestore.googleapis.com/v1/projects/athlete-talk-aa550/databases/(default)/documents/plans/' + id).then(
      (res) => {
        this.setState({
          plan: res.data
        });
        console.log(res.data);
      }
    );
  }
  render() {
    const plan = this.state.plan ? (
      <Container className="mt-lg-5 pt-lg-5 mb-3">
        <div className="shadow m-2">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://picsum.photos/640/360?random"
              className="rounded shadow mt-0"
            />
            <Card.Body className="mt-1">
              <div className="d-flex justify-content-between my-1">
                <Card.Title className="font-weight-bolder mb-0">
                  {this.state.plan.title}
                </Card.Title>
                <LikeButton />
              </div>
            </Card.Body>
            <Card.Footer className="border-0 font d-flex justify-content-between p-3">
              <small>
                <Link
                  to="/plans"
                  className="text-muted font-weight-bold text-decoration-none"
                >
                  back to plans
                </Link>
              </small>
              <small>
                <Link
                  to="/discover"
                  className="text-muted font-weight-bold text-decoration-none"
                >
                  view full category
                </Link>
              </small>
            </Card.Footer>
            <div className="d-flex justify-content-center pt-4"></div>
            <Card.Text className="light border-0 p-4">
              {this.state.plan.content}
            </Card.Text>
            <div
              style={{ paddingBottom: "25%" }}
              className="container-flex d-flex justify-content-center"
            >
              <Button
                className="rounded p-3 mr-3"
                style={{
                  backgroundColor: "#b57000",
                  borderColor: "transparent",
                }}
                variant="primary"
                type="submit"
              >
                Finish Day
              </Button>
              <Button
                style={{
                  backgroundColor: "#fff",
                  borderColor: "transparent",
                }}
                type="submit"
                className="rounded p-3 border-left-0 pl-3 text-muted"
              >
                Finish Plan
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    ) : (
      <div>
        <LoadingSpinner />
      </div>
    );

    return (
      <div className="container">{plan}</div>
      );
  }
}

export default SinglePlan;
