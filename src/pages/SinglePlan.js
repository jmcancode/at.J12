import React from "react";
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Button from "react-bootstrap/Button";
import LikeButton from "../components/Buttons/LikeButton";
import LoadingSpinner from "../components/Spinner";

import "../components/Buttons/LikeButton.css";

const SinglePlan = (props) => {
  const { plans } = props;
  if (plans) {
    return (
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
                  {props.plans.title}
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
                  to="/plans"
                  className="text-muted font-weight-bold text-decoration-none"
                >
                  view full category
                </Link>
              </small>
            </Card.Footer>
            <div className="d-flex justify-content-center pt-4"></div>
            <Card.Text className="light border-0 p-4">
              {plans.content}
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
    );
  } else {
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border"
            style={{ height: "100vh" }}
          >
            <Card.Header className="text-center">
              <h4>Quote of the day</h4>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h5 className="text-center">
                “Effectively, change is almost impossible without industry-wide collaboration, cooperation, and consensus.”
                </h5>
                <footer className="blockquote-footer mt-4 mr-5 ml-5">
                  <cite title="Source Title" src="">
                    Phil Jackson
                  </cite>
                </footer>
              </blockquote>
              <div className="mt-5 pt-5">
              <LoadingSpinner />
              </div>
              </Card.Body>
          </Card>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const plans = state.firestore.data.plans;
  const plan = plans ? plans[id] : null;
  return {
    plan: plan,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "plans",
    },
  ])
)(SinglePlan);
