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
// react quill
import "./assets/vendor/dist/quill.core.css";
import "react-quill";

// import { AuthProvider } from "./AuthContext/AuthContext";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Redux/store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from "react-redux-firebase";
import firebase from "./Firebase/Firebase.utils";
import "firebase/firestore";

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, {attachAuthIsReady: true}),
    
  )
);

const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  presence: 'presence',
  sessions: 'sessions'
}

function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth)
  if(!isLoaded(auth))return<div>Be right with ya'...</div>;
  return children
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
