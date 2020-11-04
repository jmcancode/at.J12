import React, { Component } from "react";
import { connect } from "react-redux";
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

import ReactQuill from "react-quill";
import { createPlans } from "../Redux/actions/plansActions";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  state = {
    content: "",
    title: "",
    categorySelect: [
      "Social Justice",
      "Personal Development",
      "Pro Sports",
      "Mental Health",
      "Wellness",
      "Life Skills",
      "Ethnicity",
      "Gender",
    ],
  };

  handleChange = (e, value) => {
    this.setState({
      [e.target.id]: e.target.value,
      content: value,

    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createPlans(this.state);
    
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
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
              Plan Upload
            </h3>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label>Plan Category</Label>
              <Input onChange={this.handleChange} type="select" name="select" id="categorySelect">
                <option>Social Justice</option>
                <option>Personal Development</option>
                <option>Pro Sports</option>
                <option>Mental Health</option>
                <option>Wellness</option>
                <option>Life Skills</option>
                <option>Ethnicity</option>
                <option>Gender</option>
              </Input>
            </FormGroup>
            <Label>Plan Title</Label>
            <input
              type="text"
              id="title"
              className="form-control mb-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />

            <Form onSubmit={this.handleOnSubmit}>
              <Label>Plan Text</Label>
              <div
                data-quill-placeholder="Are you sure you want to link?"
                data-toggle="quill"
              />
              <ReactQuill
                value={this.state.content}
                onChange={this.handleChange}
                placeholder="Place your plan content here..."
                theme="snow"
                id="content"
                modules={{
                  toolbar: [
                    ["bold", "italic"],
                    ["link", "blockquote", "image", "video"],
                    [
                      {
                        list: "ordered",
                      },
                      {
                        list: "bullet",
                      },
                    ],
                  ],
                  clipboard: {
                    matchVisual: false,
                  },
                }}
              />
            </Form>
            <Button
              color="primary"
              size="sm"
              className="mt-2"
              type="submit"
              block
              style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            >
              Upload
            </Button>
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
    createPlans: (plans) => dispatch(createPlans(plans)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
