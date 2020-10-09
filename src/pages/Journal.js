import React, { Component } from "react";

// bootstrap
// import Card from "react-bootstrap/Card";
import { Card, CardHeader, CardBody, Button, Form } from "reactstrap";

import ReactQuill from "react-quill";

class Journal extends Component {
  state = {
    reactQuillText: "",
  };

  handleReactQuillChange = (value) => {
    this.setState({
      reactQuillText: value,
    });
  };
  render() {
    return (
      <div className=" container card-container">
        <Card
          className="mx-1 shadow rounded  border"
          style={{ height: "100vh" }}
        >
          <CardHeader>
            <h3 className="d-flex justify-content-center mb-0" style={{fontFamily:"Graduate"}}>Journal</h3>
          </CardHeader>
          <CardBody>
            <Form>
              <div
                data-quill-placeholder="Are you sure you want to link?"
                data-toggle="quill"
              />
              <ReactQuill
                value={this.state.reactQuillText}
                onChange={this.handleReactQuillChange}
                theme="snow"
                modules={{
                  toolbar: [
                    ["bold", "italic"],
                    ["link", "blockquote", "code", "image"],
                    [
                      {
                        list: "ordered",
                      },
                      {
                        list: "bullet",
                      },
                    ],
                  ],
                }}
              />
            </Form>
            <Button
            color="primary"
            size="sm"
            className="mt-2"
            block
            >Submit</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Journal;
