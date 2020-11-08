import React, { Component } from "react";
//reactstrap
import {
  Col,
  Button,
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  FormText,
} from "reactstrap";
// custom components
import ProfileHeader from "./ProfileHeader";

class UserProfile extends Component {
  state = {
    firstName: "Emmit",
    email: "",
    updatePassword: "",
    teamSelect: [
      "None",
      "BasketBall",
      "Track & Field",
      "Football",
      "Soccer",
      "Swim Team",
      "Lacrose",
      "Rowing",
    ],
  };

  //   handleContentChange = (e) => {
  //     this.setState({
  //       journals:  e.target.value,
  //     });
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.addJournal(this.state);
  //     this.setState({
  //       content: ''
  //     })
  //   };

  //   handleClick = (e) =>{
  //     this.setState({
  //       journals: ''
  //     });
  //     console.log(e.target)
  //   }
  //   addJournal = (journal) => {
  //     journal.id = Math.random();
  //     let journals = [...this.state.journals, journal];
  //     this.setState({
  //       journals: journal
  //     })
  //   }

  render() {
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border"
            style={{ height: "100vh" }}
          >
            <CardHeader>
              <h3
                className="d-flex justify-content-center mb-0"
                style={{ fontFamily: "Graduate", color: "black" }}
              >
                Profile
              </h3>
            </CardHeader>
            <CardBody>
              <ProfileHeader />
              <Form className="pt-5 mt-3">
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Update your name
                  </Label>
                  <Col sm={10}>
                    <Input
                      className="border-top-0 border-left-0 border-right-0"
                      type="text"
                      name="text"
                      id="firstName"
                      placeholder="Full Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="teamSelect" sm={2}>
                    Select your team
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="select"
                      name="select"
                      id="teamSelect"
                      className="border-top-0 border-left-0 border-right-0"
                    >
                      <option>{this.state.teamSelect[0]}</option>
                      <option>{this.state.teamSelect[1]}</option>
                      <option>{this.state.teamSelect[2]}</option>
                      <option>{this.state.teamSelect[3]}</option>
                      <option>{this.state.teamSelect[4]}</option>
                      <option>{this.state.teamSelect[5]}</option>
                      <option>{this.state.teamSelect[6]}</option>
                      <option>{this.state.teamSelect[7]}</option>
                      <option>{this.state.teamSelect[8]}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={2}>
                    Update Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      className="border-top-0 border-left-0 border-right-0"
                      type="password"
                      name="password"
                      id="email"
                      placeholder="email@email.edu"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Update Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      className="border-top-0 border-left-0 border-right-0"
                      type="password"
                      name="password"
                      id="updatePassword"
                      placeholder="******"
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default UserProfile;
