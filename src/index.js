import React from "react";
import ReactDOM from "react-dom";
// custom css
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// slick.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill";
import AuthProvider from "./components/Auth/Provider/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
