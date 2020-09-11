import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './ToolBar.css';

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">
        <a href="/">ATHLETE TALK</a>
      </div>
      <div className="spacer"/>
      <div className="toolbar_navigation_items">
        <ul>
        <li><a href="/src/pages/Home.js"><FontAwesomeIcon icon={faSearch}/></a></li>
        
        </ul>
      </div>
    </nav>
  </header>
);


export default toolbar;