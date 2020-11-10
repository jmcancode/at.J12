import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { FaPaperPlane, FaRegImage, FaCameraRetro } from "react-icons/fa";
import {BsArrow90DegLeft} from "react-icons/bs";

class JournalList extends React.Component {
  render() {
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border"
            style={{ height: "100vh" }}
          >
          <CardHeader className="d-flex justify-content-start mt-3">
          <BsArrow90DegLeft style={{color: "#9E7E38"}} />
          <h6 style={{ fontFamily: "Graduate", color: "black" }}>
            ADD JOURNAL
          </h6>
        </CardHeader>
            <CardBody>
              <InputGroup>
                <Input placeholder="Want to say something?" />
                <InputGroupAddon addonType="append">
                  <Button
                    style={{
                      backgroundColor: "#000",
                      borderColor: "transparent",
                    }}
                    color="danger"
                  >
                    <small className="pr-2">Send</small>
                    <FaPaperPlane />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <div className="d-flex justify-content-between pt-2">
                <div>
                  <FaCameraRetro type="file" /> <small>Add Video</small>
                </div>
                <div>
                  <FaRegImage /> <small>Add Photo</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default JournalList;
