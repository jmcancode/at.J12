import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBO6f8hRtVkOk7QRAPOVUqL-n5Ff20CqCI",
    authDomain: "athlete-talk-aa550.firebaseapp.com",
    databaseURL: "https://athlete-talk-aa550.firebaseio.com",
    projectId: "athlete-talk-aa550",
    storageBucket: "athlete-talk-aa550.appspot.com",
    messagingSenderId: "259642836645",
    appId: "1:259642836645:web:55291c482072c7a1556f4c",
    measurementId: "G-Z5LN4GKRVM"
  };

  firebase.initializeApp(config);

  //access authentication on firebase
  export const auth = firebase.auth();


  // google signin
  // const provider = new.firebase.auth.GoogleAuthProvider();
  //provider.setCustomParameters({ prompt: 'select_account'});
  // export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;