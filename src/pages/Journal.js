import React from "react";
//reactstrap
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
// custom components
import JournalList from "./JournalList";
// react-redux
import { connect } from "react-redux";
import {createJournal} from "../Redux/actions/journalActions"
// react-router-dom
import {Redirect} from 'react-router-dom';


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
   this.props.createJournal(this.state)
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }

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
  return {
    auth: state.firebase.auth,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createJournal: (journal) => dispatch(createJournal(journal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
