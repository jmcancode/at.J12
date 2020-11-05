import React from "react";

// REACT-REDUX
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// REACT-BOOTSTRAP
import Card from 'react-bootstrap/Card';

class PlanCard extends React.Component {
  render() {
    return (
      <Card className="mx-auto border-0" style={{ width: '8rem' }} >
        <Card.Img variant="top"
          className="border-0 mt-0 rounded"
          src="https://picsum.photos/640/360?random" />
        <Card.Body >
          <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
            {this.props.title}
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: "10px", fontWeight: "normal" }}>
            {this.props.content}
          </Card.Text>
        </Card.Body>
      </ Card>
    )
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
)(PlanCard);
