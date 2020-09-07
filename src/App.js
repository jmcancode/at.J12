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


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/profile" component={Profile} />
          <Route path="/plans" component={Plans} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
