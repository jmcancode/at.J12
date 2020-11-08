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

import ProfileHeader from "./UserProfile/ProfileHeader";

class Home extends Component {
  state = {
    session: [1, 3, 4, 5, 6],
  };
  render() {
    const { plans, auth } = this.props;
    if (!auth.uid) return <Redirect to="/home" />;
    return (
      <>
        <Container className="mt-lg-5 pt-lg-5">
        <Container ProfileHeader >
        <ProfileHeader/>
        <br/>
        </Container>
          <div className=" container mt-4 mb-5 mb-lg-5 mt-lg-4">
            <div>
              <div className="d-flex flex-column w-lg-100">
                <div className="d-inline-flex justify-content-around mb-4 mt-0 mb-lg-4 mt-lg-0">
                  <div className="d-inline-flex ">
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
                    <div className="pt-1 ml-2 mr-2 text-white">
                      {this.state.session[Math.floor(Math.random() * 5)]}
                    </div>
                    <small className="pt-2 text-white" style={{ fontFamily: "Graduate" }}>
                      {" "}
                      Day Streak!
                    </small>
                  </div>
                  <div className="pt-1 text-white">
                    <small style={{ fontFamily: "Graduate" }}>
                      News Feed: {moment().format("l")}
                    </small>
                  </div>
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
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "plans", orderBy: ["createdAt", "desc"] }])
)(Home);
