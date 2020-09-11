import React from "react";

import './SideDrawer.css';


const sideDrawer = (props) => (
  <nav className="side-drawer">
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

export default sideDrawer;
