import React from "react";
// custom css
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/discover">Plans</a>
        </li>
        <li>
          <a href="/addplans">School Information</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/settings">Admin Post</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
