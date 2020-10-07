import React, { Component } from "react";
// custom css
import "./App.css";
// react-router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages + components
import Home from "./pages/Home";
import Navigation from "./Navigation";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import SinglePlan from "./pages/SinglePlan"
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/SideDrawer/BackDrop/BackDrop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      showNav: true,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.drawerToggleClickHandler} />;
    }
    return (
      <div className="app" style={{ height: "100%" }}>
        <Router>
          <Navigation />
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/plans" component={Plans} />
            <Route path="/settings" component={Settings} />
            <Route path="/journal" component={Messages} />
            <Route path="/plan" component={SinglePlan} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
