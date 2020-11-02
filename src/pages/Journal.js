import React from "react";
// import {db} from "../Firebase/Firebase.utils";


import { Card, CardHeader, CardBody, Button, Form } from "reactstrap";
import ListGroup from "react-bootstrap/ListGroup";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Journal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reactQuillText: '',
      
    }
  }

  handleReactQuillChange = (value, delta, source, editor) => {
    this.setState({
      reactQuillText: value,
    });
  };

  handleSubmit = (e,) => {
    e.preventDefault();
   this.setState({
     reactQuillText: '',
   })
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
              <ReactQuill
                value={this.state.reactQuillText}
                onChange={this.handleReactQuillChange}
                placeholder="Write your thoughts here"
                theme="snow"
                bounds={'.app'}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline"],
                    ["link", "blockquote", "image"],
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
              onClick={this.handleSubmit}
              type="submit"
              color="primary"
              size="sm"
              id="fileButton"
              className="mt-2"
              block
              style={{ backgroundColor: "#b57000", borderColor: "transparent" }}
            >
              Done
            </Button>
            <br/>
            <ListGroup>
              <ListGroup.Item>Entry: 1</ListGroup.Item>
              <ListGroup.Item>Entry: 2</ListGroup.Item>
              <ListGroup.Item>Entry: 3</ListGroup.Item>
              <ListGroup.Item>Entry: 4</ListGroup.Item>
              <ListGroup.Item>Entry: 5</ListGroup.Item>
            </ListGroup>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Journal;
