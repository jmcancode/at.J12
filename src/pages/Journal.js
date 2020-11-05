import React from "react";
//reactstrap
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
// custom components
import JournalList from "./JournalList";
// react-redux
import { connect } from "react-redux";
// react-router-dom
import {Redirect} from 'react-router-dom';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";


class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleContentChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.createJournal(this.state);
  };


  render() {
    const{auth} = this.props;
    if(!auth.uid) return <Redirect to='/login'/>
    return (
      <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
        <Card
          className="mx-1 shadow rounded  border"
          style={{ height: "100vh" }}
        >
          <CardHeader>
            <h3
              className="d-flex justify-content-center mb-0"
              style={{ fontFamily: "Graduate", color: "b570000" }}
            >
              Journal
            </h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <div
                data-quill-placeholder="Are you sure you want to link?"
                data-toggle="quill"
              />
              <FormGroup>
              <Label for="exampleText">What's on your mind?</Label>
              <Input type="textarea" name="text" id="content" />
            </FormGroup>
            </Form>
            <Button
              onClick={this.handleSubmit}
              type="submit"
              color="primary"
              size="sm"
              id="fileButton"
              className="mt-2"
              block
              style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            >
              Submit
            </Button>
            <br />
            <JournalList/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    journal: state.firestore.ordered.journal,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "journal", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Journal);
