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
import Journal from "./pages/Journal";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import SinglePlan from "./pages/SinglePlan";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/SideDrawer/BackDrop/BackDrop";
import firebase from "../src/Firebase/Firebase.utils";

import { AuthProvider } from "../src/AuthContext/AuthContext";
import PrivateRoute from "../src/components/PrivateRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      showNav: true,
      currentUser: true,
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

    let nav;
    const user = firebase.auth().currentUser;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.drawerToggleClickHandler} />;
    }

    if (user != null) {
      nav = (
        <div>
          <Navigation />
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
      );
    } else {
      nav = null;
    }

    return (
      <div className="app" style={{ height: "100%" }}>
        <Router>
          <AuthProvider>
            {nav}
            <Switch>
              <PrivateRoute exact path="/" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/plans" component={Plans} />
              <Route path="/settings" component={Settings} />
              <Route path="/journal" component={Journal} />
              <Route path="/plan" component={SinglePlan} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
