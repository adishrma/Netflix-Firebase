import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSnkIAfwpgsvFFnUA4cMaYON5M4uROVJI",
  authDomain: "anime-project-e5b98.firebaseapp.com",
  projectId: "anime-project-e5b98",
  storageBucket: "anime-project-e5b98.appspot.com",
  messagingSenderId: "1073290286343",
  appId: "1:1073290286343:web:d2fd1ecbd2735b2f3321a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;