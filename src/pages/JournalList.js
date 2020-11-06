import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router";


class JournalList extends Component {
  state={
    date: "11/06/20",
    plans: [
      "Pro Sports",
      "Wellness",
      "Gender",
      "Social Justice",
    ],
  }
  addJournal = (journal) => {
    journal.id = Math.random();
    let journals = [...this.state.journals, journal];
    this.setState({
      journals: journal
    })
  }
  render() {
    const {  auth  } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
      return (
        <ListGroup>
          <ListGroup.Item> Updated: {this.state.date}</ListGroup.Item>
          <ListGroup.Item> Journal Entry: {this.state.date}</ListGroup.Item>
          <ListGroup.Item> Journal Entry: {this.state.plans[1]} </ListGroup.Item>
          <ListGroup.Item> Journal Entry: {this.state.plans[0]} </ListGroup.Item>
          <ListGroup.Item> Journal Entry:  {this.state.plans[3]}</ListGroup.Item>
        </ListGroup>
      );
    }
  }

const mapStateToProps = (state) => {
  console.log(state);
  return {
    journal: state.firestore.journal,
    auth: state.firebase.auth,
    plans: state.firebase.plans
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "journal", orderBy: ["createdOn", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
    { collection: "plans", orderedBy: ["time", "desc"]}
  ])
)(JournalList);
