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

        {/* bottom contacts */}
        
      </ul>
    </nav>
  );
};

export default sideDrawer;
