import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid justify-content-between ">
          <a className="navbar-brand" href="/home">
            <h3>Athlete Talk</h3>
          </a>
          <Nav className="w-35 .d-sm-none .d-md-block">
            <NavItem className="d-flex d-inline">
            <div className="pt-2">
              <FontAwesomeIcon className="mx-2" size="2x" icon={faHome} route />
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
                  <DropdownToggle className="btn" size="md" color="link">
                    
                  </DropdownToggle>
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
            </NavItem>
          </Nav>
        </div>
      </nav>

      {/* Bottom Tab Navigator*/}
      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
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
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
