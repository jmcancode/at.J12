import React, { Component } from "react";
// custom css
import "./App.css";
// react-router dom
import { BrowserRouter, Switch, Route } from "react-router-dom";
//react-redux-firebase
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import rootReducer from "./Redux/store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// firebase
import firebase from "./Firebase/Firebase.utils";
import "firebase/firestore";
//pages + components
import Home from "./pages/Home";
import Navigation from "./Navigation";
import DiscoverPage from "./pages/DiscoverPage";
import Settings from "./pages/Settings";
import MyPlans from "./pages/Plans/MyPlans";
import PlanAdder from "./pages/Plans/PlanAdder";
import VideoPlan from "./pages/Plans/VideoPlan";
import MultiDay from "./pages/Plans/MultiDayPlan";
import CompleteCongrats from "./pages/Plans/CompleteCongrats";
import CompletedPlans from "./pages/CompletedPlans";
import SavedPlans from "./pages/SavedPlans";
import CatgegorySection from "./pages/Plans/CategorySection";
import Journal from "./pages/Journal";
import JournalAdder from "./pages/Journal/journalAdder";
import Register from "./components/Auth/Register";
import login from "./components/Auth/Login";
import SinglePlan from "./pages/SinglePlan";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import UserProfile from "./pages/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
//Axios
import Axios from "axios";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    showNav: false,
    currentUser: null,
    posts: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
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

    const LoginContainer = () => (
      <>
        <Route path="/home" return={() => <Route to="/login" />} />
        <Route path="/register" component={Register} />
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
        <Route exact path="/home" component={Home} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/settings" component={Settings} />
        <Route path="/journal" component={Journal} />
        <Route exact path="/:plan_id" component={SinglePlan} />
        <Route path="/videoplayer" component={VideoPlan} />
        <Route path="/multiday" component={MultiDay} />
        <Route path="/watchlater" component={MyPlans} />
        <Route path="/completedplans" component={CompletedPlans} />
        <Route path="/catsection" component={CatgegorySection}/>
        <Route path="/savedplans" component={SavedPlans} />
        <Route path="/addplans" component={PlanAdder} />
        <Route path="/congrats" component={CompleteCongrats} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/addjournal" component={JournalAdder} />
      </>
    );
    return (
      <BrowserRouter>
        <div className="app" style={{ height: "100%" }}>
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rffProps}>
              <Switch>
                <Route exact path="/login" component={LoginContainer} />
                <PrivateRoute component={DefaultContainer} />
              </Switch>
            </ReactReduxFirebaseProvider>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
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
  updateProfileOnLogin: false,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: "presence",
  sessions: "sessions",
};

export default App;
