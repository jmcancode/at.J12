import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import BottomNav from "./components/BottomNav";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import routes from '../src/routes'
import "./assets/css/Navigation.css";
import {
  faHome,
  faGlobe,
  faBook,
  faFolder,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const Navigation = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      {/* Top Bar*/}
      <Navbar
        className="navbar navbar-expand-md navbar-light d-none d-lg-block header-img"
        role="navigation"
        fixed="top"
      >
        <Container>
          <Row className="d-flex flex-row container-fluid justify-content-evenly align-items-center">
            <Col>
              <a className="" href="/home">
                <img
                  alt="Athlete Talk"
                  src={require("./assets/AT Logos/at-long-orange.png")}
                  style={{ width: "55%" }}
                  className="my-3 ml-4"
                />
              </a>
            </Col>
            <Col className="d-flex justify-content-center">
              <Form inline className="pt-0 w-100">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  className="mr-sm-2 w-100"
                />
              </Form>
            </Col>
            <Col>
              <Nav className="align-items-center justify-content-end">
                <Nav.Item className="d-flex justify-content-between">
                  <div className="d-flex">
                    <Link style={{ color: "black" }} to="/home">
                      <FontAwesomeIcon className="mx-2" size="lg" icon={faHome} />
                    </Link>
                    <Link style={{ color: "black" }} to="/plan">
                      <FontAwesomeIcon
                        className="mx-2"
                        size="lg"
                        icon={faFolder}
                      />
                    </Link>
                    <Link style={{ color: "black" }} to="/plans">
                      <FontAwesomeIcon
                        className="mx-2"
                        size="lg"
                        icon={faGlobe}
                      />
                    </Link>
                    <Link style={{ color: "black" }} to="/journal">
                      <FontAwesomeIcon className="mx-2" size="lg" icon={faBook} />
                    </Link>
                    <Link style={{ color: "black" }} to="/settings">
                      <FontAwesomeIcon className="mx-2" size="lg" icon={faUserCog} />
                    </Link>
                  </div>
                  <div className="d-none d-sm-block d-md-none">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle
                        className="btn"
                        size="md"
                        color="link"
                      ></DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem as="button">Administrator</DropdownItem>
                        <DropdownItem as="button">Athlete</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          as="button"
                          tag="a"
                          href="/src/pages/Login.jsx"
                        >
                          Sign-out
                      </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Bottom Tab Navigator*/}
      <BottomNav />
    </div>
  );
};

export default Navigation;
