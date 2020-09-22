import React from "react";
import "./SideDrawer.css";
import CampusContacts from "../CampusContacts"

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/plan">My Plans</a>
        </li>
        <li>
          <a href="/plans">Discover</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/">School Infomation</a>
        </li>

        {/* bottom contacts */}
        <li>
          <CampusContacts />
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
