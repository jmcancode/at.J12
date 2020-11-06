import React, { Component } from "react";
//reactstrap
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// custom components
import JournalList from "./JournalList";
import { createJournal } from "../Redux/actions/journalActions";
// react-redux
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase'
// react-router-dom
import { Redirect } from "react-router-dom";

class Journal extends Component {
  state = {
    content: "" ,
  };

  handleContentChange = (e) => {
    this.setState({
      content:  e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournal(this.state);
  };

  handleClick = (e) =>{
    this.setState({
      content: ''
    });
    console.log(e.target)
  }


  render() {
    const { auth, journal } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
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
                <Label htmlfor="exampleText">What's on your mind?</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="content"
                  onChange={this.handleContentChange}
                />
              </FormGroup>
            </Form>
            <Button
              onClick={this.handleClick}
              type="submit"
              color="primary"
              size="sm"
              id="submit"
              className="mt-2"
              block
              style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            >
              Submit
            </Button>
            <br />
            <JournalList addJournal={this.addJournal} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createJournal: (journal) => dispatch(createJournal(journal)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
  {collection: 'journal', orderBy: ['createdOn', 'desc']}
]))(Journal);
