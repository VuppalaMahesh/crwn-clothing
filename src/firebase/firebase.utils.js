import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRotWVge4LiOGhvTo948OT-Wy6TuIFVk4",
    authDomain: "crwn-db-947cc.firebaseapp.com",
    databaseURL: "https://crwn-db-947cc.firebaseio.com",
    projectId: "crwn-db-947cc",
    storageBucket: "crwn-db-947cc.appspot.com",
    messagingSenderId: "278687040110",
    appId: "1:278687040110:web:0167209aa92519b9239c7f",
    measurementId: "G-4VG688YXEY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

