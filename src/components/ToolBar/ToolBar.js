import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './ToolBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo text-center">
        <a href="/login"><img alt="Athelte Talk" style={{size: '1px'}} src={require("../../assets/AT Logos/at-long-orange.png")}/></a>
      </div>
      <div className="toolbar_navigation_items">
        <a href="/src/pages/Home.js" className>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </a>
      </div>
    </nav>
  </header>
);


export default toolbar;