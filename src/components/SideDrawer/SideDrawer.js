import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/src/pages/Home.js">Home</a>
        </li>
        <li>
          <a href="/src/pages/Plans.js">Plans</a>
        </li>
        <li>
          <a href="/src/pages/Messages.js">Messages</a>
        </li>
        <li>
          <a href="/src/pages/Settings.js">Settings</a>
        </li>
        <li>
          <a href="/src/pages/Home.js">School Infomation</a>
        </li>
        <li>
          <a href="/src/pages/Profile.js">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
