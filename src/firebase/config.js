import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9OzKimeJogADwCIsiCvyPFQYCKr4N5iw",
  authDomain: "mymoney-1dcdd.firebaseapp.com",
  projectId: "mymoney-1dcdd",
  storageBucket: "mymoney-1dcdd.appspot.com",
  messagingSenderId: "766474566243",
  appId: "1:766474566243:web:26a31ca010e5af61cc9656",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
