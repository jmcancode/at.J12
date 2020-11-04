import React, { Component } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import PlansList from "../components/PlansList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

class Home extends Component {
  render() {
    const { plans, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <>
        <Container>
          <div className=" container mt-4 mb-5">
            <div>
              <div className="d-flex flex-column w-lg-100">
                <div className="d-flex justify-content-between mb-4 mt-0">
                  <div>{moment().format("l")}</div>
                  <div>{moment().format("LTS")}</div>
                </div>
                <PlansList plans={plans} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    plans: state.firestore.ordered.plans,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "plans", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Home);
