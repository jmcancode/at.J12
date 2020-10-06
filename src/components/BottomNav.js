import React from 'react';
import firebase from '../Firebase/Firebase.utils'
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faBook,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";


var user = firebase.auth().currentUser;
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
    route: "/message",
    icon: faBook,
    label: "Journal",
  },
];

const BottomNav = () => {
  if (user != null) {
    return (
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
    );
  } else {
    return (
      <div></div>
    );
  }
}
export default BottomNav