import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


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

//access authentication & database on firebase
export const auth = firebase.auth();
export const db = firebase.database();



export default firebase;