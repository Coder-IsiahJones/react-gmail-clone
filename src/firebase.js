import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW4fHQUMoRGSrAcWU2PHMp8WWzSgU8a1g",
  authDomain: "react-clone-8680e.firebaseapp.com",
  projectId: "react-clone-8680e",
  storageBucket: "react-clone-8680e.appspot.com",
  messagingSenderId: "42227877764",
  appId: "1:42227877764:web:b977bb0a1bf8981c9fffd1",
  measurementId: "G-S121VPQJE9",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
