import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import  Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl';
import Nav from "react-bootstrap/Nav";

import {
  faHome,
  faUserCircle,
  faEnvelope,
  faFolder,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const tabs = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/search",
    icon: faFolder,
    label: "Plans",
  },
  {
    route: "/addpost",
    icon: faPlusSquare,
    label: "Add Post",
  },
  {
    route: "/Message",
    icon: faEnvelope,
    label: "Messages",
  },
  {
    route: "/login",
    icon: faUserCircle,
    label: "Profile",
  },
];

const Navigation = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div>
      {/* Top Bar*/}
      <Navbar
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid justify-content-between ">
          <a className="navbar-brand" href="/home">
            <h3>Athlete Talk</h3>
          </a>
          <div>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </div>
          <Nav className="w-35 .d-sm-none .d-md-block">
            <Nav.Item className="d-flex d-inline">
              <div className="pt-2">
                <FontAwesomeIcon
                  className="mx-2"
                  size="2x"
                  icon={faHome}
                  route
                />
                <FontAwesomeIcon
                  className="mx-2"
                  size="2x"
                  icon={faFolder}
                  route
                />
                <FontAwesomeIcon
                  className="mx-2"
                  size="2x"
                  icon={faEnvelope}
                  route
                />
                <FontAwesomeIcon
                  className="mx-2"
                  size="2x"
                  icon={faUserCircle}
                  route
                />
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
                    <DropdownItem
                      as="button"
                      tag="a"
                      href="/src/pages/Login.jsx"
                    >
                      Sign-up
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
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <Nav.Item key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
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

export default Navigation;
