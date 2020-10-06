import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../assets/css/Navigation.css";

const Navigation = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const tabs = [
    {
      route: "/home",
      icon: faHome,
      label: "Home",
    },
    {
      route: "/plan",
      icon: faFolder,
      label: " My Plans",
    },
    {
      route: "/plans",
      icon: faGlobe,
      label: "Discover",
    },
    {
      route: "/journal",
      icon: faBook,
      label: "Journal",
    },
  ];

  return (
    <div>
      {/* Top Bar*/}
      <Navbar
        className="navbar navbar-expand-md navbar-light d-none d-lg-block fixed-top header-img"
        role="navigation"
      >
        <div className="container-flex d-flex justify-content-between ">
          <a className="navbar-brand" href="/">
            <img
              alt="Athlete Talk"
              src={require("../assets/AT Logos/at-long-orange.png")}
              style={{ width: "25%" }}
            />
          </a>
          <div className="d-flex justify-content-center">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="mr-sm-2"
              />
            </Form>
          </div>
          <Nav className="w-35 .d-sm-none .d-md-block">
            <Nav.Item className="d-flex d-inline">
              <div className="pt-2 d-flex justify-content-center">
                <ul className="d-flex">
                  <Link to="/home">
                    <FontAwesomeIcon className="mx-2" size="2x" icon={faHome} />
                  </Link>
                  <NavLink to="/plan">
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
                </ul>
              </div>
              <div>
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
                    <DropdownItem as="button" tag="a" href="/register">
                      Sign-out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>

      {/* Bottom Tab Navigator*/}
      <Nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
        style={{ fontSize: "small" }}
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <Nav.Item key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                  style={{ color: "#b57000" }}
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </Nav.Item>
            ))}
          </div>
        </Nav>
      </Nav>
    </div>
  );
};

export default withRouter(Navigation);
