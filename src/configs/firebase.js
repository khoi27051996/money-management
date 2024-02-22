import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyDZvY0Y24SniZL7DLGJIizQ-oXNvem_zpA",
  authDomain: "imoney-2b287.firebaseapp.com",
  projectId: "imoney-2b287",
  storageBucket: "imoney-2b287.appspot.com",
  messagingSenderId: "878352035461",
  appId: "1:878352035461:web:10d5b65016ce3e5847c3ec",
  measurementId: "G-WTRQG9N5M3"
};

firebase.initializeApp(firebaseConfig);

const fireAuth = firebase.auth();
const fireStore = firebase.firestore();
const fireStorage = firebase.storage();
const databaseFire = firebase.database();


const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fireStore, fireAuth, timestamp, fireStorage, databaseFire }
