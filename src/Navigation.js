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
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Athlete Talk
          </a>
          <Nav className="ml-auto">
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="btn" size="md" color="link">
                  Sign-up
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem as="button">Clients</DropdownItem>
                  <DropdownItem as="button">FAQ </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem as="button" tag="a" href="/src/pages/Login.jsx">
                    Sign-in
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
