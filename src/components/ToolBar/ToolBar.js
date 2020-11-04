import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './ToolBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";




const toolbar = (props) => (
  <header className="toolbar d-lg-none">
    <nav className="toolbar_navigation px-4 py-2 mt-2">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo text-center w-75">
        <a href="/home"><img alt="Athlete Talk" src={require("../../assets/AT Logos/at-long-orange.png")} className="mt-0" /></a>
      </div>
      <div className="toolbar_navigation_items">
        <a href="/settings">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </a>
      </div>
    </nav>
  </header>
);


export default toolbar;