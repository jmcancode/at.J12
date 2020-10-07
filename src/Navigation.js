import React, { useState } from "react";
<<<<<<< HEAD
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
>>>>>>> 1c5966fdf92b4605d66460e599fc1378f9ef0d13
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import BottomNav from "./components/BottomNav";
// import routes from '../src/routes'
import "./assets/css/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,

  faFolder,
} from "@fortawesome/free-solid-svg-icons";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navigation = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

<<<<<<< HEAD
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
=======
>>>>>>> 1c5966fdf92b4605d66460e599fc1378f9ef0d13

  return (
    <div>
      {/* Top Bar*/}
      <Navbar
        className="navbar navbar-expand-md navbar-light d-none d-lg-block fixed-top header-img"
        role="navigation"
      >
        <div className="d-flex container-fluid justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img
              alt="Athlete Talk"
              src={require("./assets/AT Logos/at-long-orange.png")}
              style={{ width: "25%" }}
              className="my-3 ml-4"
            />
          </a>
          <div className="d-flex">
            <Form inline className="pt-0">
              <FormControl
                type="text"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="mr-sm-2"
              />
            </Form>

            <Nav className="align-items-center">
              <Nav.Item className="d-flex justify-content-between">
                <div className="d-flex">
                  <Link to="/home">
                    <FontAwesomeIcon className="mx-2" size="2x" icon={faHome} />
                  </Link>
                  <Link to="/plan">
                  <FontAwesomeIcon className="mx-2" size="2x" icon={faFolder} />
                  </Link>
                  <Link to="/plans">
                  <FontAwesomeIcon className="mx-2" size="2x" icon={faGlobe} />
                  </Link>
                  <Link to="/journal">
                  <FontAwesomeIcon
                    className="mx-2"
                    size="2x"
                    icon={faBook}
                  />
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
          </div>
        </div>
      </Navbar>

      {/* Bottom Tab Navigator*/}
      <BottomNav />
    </div>
  );
};

export default Navigation;
