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
//Redux, Redux Thunk //React-router
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Redux/store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
// Firebase 
import firebase from "./Firebase/Firebase.utils";
import "firebase/firestore";
// custom components
import LoadingSpinner from "./components/Spinner";
//react-bootstrap
import Card from "react-bootstrap/Card";



const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const initalState = {};
const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, { attachAuthIsReady: true })
  )
);

const rffProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  useFirestoreForProfile: true,
  createFirestoreInstance,
  userProfile: "users",
  presence: "presence",
  sessions: "sessions",
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border mt-3 mt-lg-5"
            style={{ height: "100vh" }}
          >
            <Card.Header className="text-center">
              <h4>Quote of the day</h4>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h5 className="text-center">
                  "When the praises go up, the blessings come down"
                </h5>
                <footer className="blockquote-footer ml-5">
                  <cite title="Source Title" src="">
                    Chance the Rapper
                  </cite>
                </footer>
              </blockquote>
              <div className="mt-5 pt-5">
                <LoadingSpinner />
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );

  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
