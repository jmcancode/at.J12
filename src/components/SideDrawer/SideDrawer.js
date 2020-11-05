import React from "react";
// custom css
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
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/myplans">My Plans</a>
        </li>
        <li>
          <a href="/plans">Discover</a>
        </li>
        <li>
          <a href="/journal">Journal</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/addplans">Administration</a>
        </li>
      </ul>
    </nav>
  );
};


export default sideDrawer;
