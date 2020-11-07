import React, { Component } from "react";
// custom css
import "./Home.css";
// react-bootstrap
import Container from "react-bootstrap/Container";
// redux
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// react-router
import { Redirect } from "react-router-dom";
// moment.js
import moment from "moment";
// react-icons
import { FaStar } from "react-icons/fa";
// custom components
import PlansList from "../components/PlansList";
import Notifications from "../components/Notifications";

class Home extends Component {
  state={
    session: [1,3,4,5,6],
  }
  render() {
    const { plans, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <>
        <Container className="mt-lg-5 pt-lg-5">
          <div className=" container mt-4 mb-5 mb-lg-5 mt-lg-4">
            <div>
              <div className="d-flex flex-column w-lg-100">
                <div className="d-flex justify-content-between mb-4 mt-0">
                  <FaStar
                    className="star-icon"
                    style={{
                      color: "gold",
                      height: "25px",
                      width: "25px",
                      padding: "0%",
                      margin: "0%",
                    }}
                  />
                  <div>News Feed: {moment().format("l")}</div>
                </div>
                <div className="mx-auto">
                  {" "}
                  <Notifications notifications={notifications} className="mt-lg-5" />{" "}
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
    { collection: "notifications", limit: 1, orderBy: ["time", "desc"] },
  ])
)(Home);
