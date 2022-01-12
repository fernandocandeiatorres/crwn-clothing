import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDcnIGqMweYAXmpJ1kzur5I4zMPolJ6dIY",
  authDomain: "crwn-db-e0705.firebaseapp.com",
  projectId: "crwn-db-e0705",
  storageBucket: "crwn-db-e0705.appspot.com",
  messagingSenderId: "495474338520",
  appId: "1:495474338520:web:b71a1134f8b9d87de785ad",
  measurementId: "G-06PXLFRDNZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
