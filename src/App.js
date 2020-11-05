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
import PrivateRoute from "./components/PrivateRoute";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import firebase from "./Firebase/Firebase.utils";
import "firebase/firestore";
import rootReducer from "./Redux/store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//pages + components
import Home from "./pages/Home";
import Navigation from "./Navigation";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";
import MyPlans from "./pages/MyPlans";
import PlanAdder from "./pages/PlanAdder";
import CompletedPlans from "./pages/CompletedPlans";
import SavedPlans from "./pages/SavedPlans";
import Journal from "./pages/Journal";
import Register from "./components/Auth/Register";
import login from "./components/Auth/Login";
import SinglePlan from "./pages/SinglePlan";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/SideDrawer/BackDrop/BackDrop";
import { Provider } from "react-redux";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    showNav: false,
    currentUser: null,
  };

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

    const LoginContainer = () => (
      <>
        <Route path="/home" return={() => <Redirect to="/login" />} />
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={login} />
      </>
    );

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
        <Route path="/completedplans" component={CompletedPlans} />
        <Route path="/savedplans" component={SavedPlans} />
        <Route path="/addplans" component={PlanAdder} />
      </>
    );
    return (
      <div className="app" style={{ height: "100%" }}>
        <Router>
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rffProps}>
              <Switch>
                <Route exact path="/login" component={LoginContainer} />
                <PrivateRoute component={DefaultContainer} />
              </Switch>
            </ReactReduxFirebaseProvider>
          </Provider>
        </Router>
      </div>
    );
  }
}
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, { attachAuthIsReady: true })
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: "users",
  presence: "presence",
  sessions: "sessions",
};

export default App;
