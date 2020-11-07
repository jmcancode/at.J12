import React, { Component } from "react";
// import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormText,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// import { createPlans } from "../Redux/actions/plansActions";
// import { Redirect } from "react-router-dom";

class PlanAdder extends Component {
  state = {
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
    title: "",
    content: "",
    exampleFile: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    this.props.createPlans(this.state);
    this.props.history.push('/home');
  };

  render() {
    return (
      <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
        <Card
          className="mx-1 shadow rounded  border"
          style={{ height: "100vh" }}
        >
          <CardHeader>
            <h3
              className="d-flex justify-content-center mb-0"
              style={{ fontFamily: "Graduate", color: "#9E7E38" }}
            >
              Upload Plans
            </h3>
          </CardHeader>
          <CardBody>
          <Form onSubmit={this.handleOnSubmit}>
            <FormGroup>
              <Label>Plan Category</Label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="select"
                id="categorySelect"
              >
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
              <FormGroup>
                <Label for="content">Text Area</Label>
                <Input type="textarea" name="text" id="content" />
                <FormGroup>
                  <Input className="pt-2" type="file" name="file" id="exampleFile" multiple />
                  <FormText color="muted">
                    You can upload multiple files at once. PNG, JPG, and MP4 are accepted.
                  </FormText>
                </FormGroup>
              </FormGroup>
            </Form>
            <Button
              color="primary"
              size="sm"
              className="mt-2"
              type="submit"
              block
              style={{ backgroundColor: "#9E7E38", borderColor: "transparent" }}
            >
              Upload
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default PlanAdder;
