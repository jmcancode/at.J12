import React, { Component } from "react";
// custom css
import "./App.css";
// react-router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

import { AuthProvider } from "../src/AuthContext/AuthContext";
import PrivateRoute from "../src/components/PrivateRoute";

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


    //CONATINERS FOR KEEPING NAV OUT OF LOGIN/REGISTER
    //LOGIN CONTAINER WITHOUT NAVIGATION
    const LoginContainer = () => (
      <>
        <Route path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </>
    );
    //DEFAULT CONTAINER WITH NAVIGATION
    const DefaultContainer = () => (
      <>
        <>
          <Navigation />
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </>
        <Route path="/home" component={Home} />
        <Route path="/plans" component={Plans} />
        <Route path="/settings" component={Settings} />
        <Route path="/journal" component={Journal} />
        <Route path="/plan" component={SinglePlan} />
      </>
    );


    return (
      <div className="app" style={{ height: "100%" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/(login)" component={LoginContainer} />
              {/* ADDED PRIVATE ROUTE TO KEEP UNLOGGED USERS AT OUT OF OTHER ROUTES */}
              <PrivateRoute component={DefaultContainer} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
