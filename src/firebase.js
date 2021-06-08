import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMM5Gb75QfKP3pE1QQzxFJAqKREuc3-LI",
  authDomain: "react-clone-b157a.firebaseapp.com",
  projectId: "react-clone-b157a",
  storageBucket: "react-clone-b157a.appspot.com",
  messagingSenderId: "71402825676",
  appId: "1:71402825676:web:21621e214a1582434b1f69",
  measurementId: "G-HPPKVY49E9",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
