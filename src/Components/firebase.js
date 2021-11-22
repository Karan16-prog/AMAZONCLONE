import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbbkTkpjRDCHvrzP16Th9eigDs5bJAfFI",
  authDomain: "development-test-d6510.firebaseapp.com",
  projectId: "development-test-d6510",
  storageBucket: "development-test-d6510.appspot.com",
  messagingSenderId: "421893219021",
  appId: "1:421893219021:web:ff232bb64d65a1b57d3f84",
  measurementId: "G-ZJ640VBNXH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };