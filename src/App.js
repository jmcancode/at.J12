import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./Navigation";
import Profile from "./pages/Profile";
import AddPost from "./pages/AddPost";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/profile" component={Profile} />
          <Route path="/plans" component={Plans} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/message" component={Messages} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
