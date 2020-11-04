import authReducer from './authReducer';
import plansReducer from './plansReducer';
import journalReducer from "./journalReducer";
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    plans: plansReducer,
    journal: journalReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

});

export default rootReducer