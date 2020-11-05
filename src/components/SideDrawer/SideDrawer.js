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
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/addplans">Add Plans</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
