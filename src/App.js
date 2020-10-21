import React, { Component } from "react";
// custom css
import "./App.css";
// react-router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//pages + components
import Home from "./pages/Home";
import Navigation from "./Navigation";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";
import MyPlans from "./pages/MyPlans";
import Journal from "./pages/Journal";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import SinglePlan from "./pages/SinglePlan";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/SideDrawer/BackDrop/BackDrop";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { AuthProvider } from "../src/AuthContext/AuthContext";
import PrivateRoute from "../src/components/PrivateRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      showNav: false,
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

    //CONTAINERS FOR KEEPING NAV OUT OF LOGIN/REGISTER
    //LOGIN CONTAINER WITHOUT NAVIGATION
    const LoginContainer = () => (
      <>
        <Route path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/" component={Register} />
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
        <Route path="/myplans" component={MyPlans} />
      </>
    );

    return (
      <div className="app" style={{ height: "100%" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/(login)" component={LoginContainer} />
              <PrivateRoute component={DefaultContainer} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
