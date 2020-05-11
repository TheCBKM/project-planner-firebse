import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyD0SzFOQPHNPeb5ifRa0x0fSralgynpUao",
  authDomain: "project-planner-f562e.firebaseapp.com",
  databaseURL: "https://project-planner-f562e.firebaseio.com",
  projectId: "project-planner-f562e",
  storageBucket: "project-planner-f562e.appspot.com",
  messagingSenderId: "324277974989",
  appId: "1:324277974989:web:48d7657052cea12f7ef684"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 