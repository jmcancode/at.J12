import React from 'react';
// import firebase from '../Firebase/Firebase.utils'; 
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { routesData } from '../routesData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// var user = firebase.auth().currentUser;

const BottomNav = () => {
  // if (user != null) {
  return (
    <Nav
      className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
      role="navigation"
      style={{ fontSize: "small" }}
    >
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {routesData.map((tab, index) => (
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
}
export default BottomNav;