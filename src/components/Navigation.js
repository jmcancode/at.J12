import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

import {
  faHome,
  faFolder,
  faBook,
  faGlobe,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/Navigation.css";

const Navigation = () => {
  return (
    <div>
      {/* Top Bar*/}
      <Navbar
        className="navbar navbar-expand-md navbar-light d-none d-lg-block fixed-top header-img"
        role="navigation"
      >
        <div className="container-flex d-flex justify-content-between">
          <a className="navbar-brand" href="/home">
            <img
              alt="Athlete Talk"
              src={require("../assets/AT Logos/at-long-orange.png")}
              style={{ width: "25%" }}
            />
          </a>
          <div className="d-flex justify-content-center">
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                aria-label="Search"
                aria-describedBy="basic-addon1"
                className="mr-sm-5"
              />
            </Form>
          </div>
          <Nav className="w-35 .d-sm-none .d-md-block">
            <Nav.Item className="d-flex d-inline">
              <div className="pt-2 d-flex justify-content-center">
                <ul className="d-flex justify-content-center">
                  <Link to="/home">
                    <FontAwesomeIcon className="mx-2" size="2x" icon={faHome} />
                  </Link>
                  <NavLink to="/myplans">
                    <FontAwesomeIcon
                      className="mx-2"
                      size="2x"
                      icon={faFolder}
                    />
                  </NavLink>
                  <NavLink to="/plans">
                    <FontAwesomeIcon
                      className="mx-2"
                      size="2x"
                      icon={faGlobe}
                    />
                  </NavLink>
                  <NavLink to="/messages">
                    <FontAwesomeIcon className="mx-2" size="2x" icon={faBook} />
                  </NavLink>
                  <NavLink to="/settings">
                    <FontAwesomeIcon
                      className="mx-2"
                      size="2x"
                      icon={faUsersCog}
                    />
                  </NavLink>
                </ul>
              </div>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default withRouter(Navigation);
