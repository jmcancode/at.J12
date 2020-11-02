import * as React from "react";

// bootstrap
// import Card from "react-bootstrap/Card";
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

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reactQuillText: "",
      title: "",
    };
  }
  
  

  handleReactQuillChange = (value) => {
    this.setState({
      reactQuillText: value,
    });
  };
  handleTitleChange = (value) => {
    this.setState({
      title: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault()
  }

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
              style={{ fontFamily: "Graduate", color: "b570000" }}
            >
              Plan Upload
            </h3>
          </CardHeader>
          <CardBody>
           
          <FormGroup>
          <Label>Plan Category</Label>
          <Input type="select" name="select" id="exampleSelect">
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
              <FormGroup>
              <Label>Content Type</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Single Day</option>
                <option>Multi-Day</option>
              </Input>
            </FormGroup>
              <Label>Plan Title</Label>
              <input
                type="text"
                className="form-control mb-2"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />

            <Form>
              <Label>Plan Text</Label>
              <div
                data-quill-placeholder="Are you sure you want to link?"
                data-toggle="quill"
              />
              <ReactQuill
                value={this.state.reactQuillText}
                onChange={this.handleReactQuillChange}
                placeholder="Place your plan content here..."
                theme="snow"
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
                  }
                }}
              />
            </Form>
            <Form>
              <div className="form-group mt-2">
                <input type="file" className="form-control-file" />
              </div>
            </Form>
            <Button
              color="primary"
              size="sm"
              className="mt-2"
              block
              style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            >
              Add Plan
            </Button>
            <Button
              color="primary"
              size="sm"
              className="mt-2"
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

export default Admin;
