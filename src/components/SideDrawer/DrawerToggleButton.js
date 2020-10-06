import React from "react";

import "./DrawerToggleButton.css";
import { CgMenu } from 'react-icons/cg'

const drawerToggleButton = (props) => (
  <button className="toggle_button" onClick={props.click}>
    <h2><CgMenu /></h2>
  </button>
);

export default drawerToggleButton;
