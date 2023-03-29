import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut  } from 'firebase/auth';
import { collection, addDoc,getFirestore } from "firebase/firestore"; 



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvpVJAnu24vc8JGF8QHCzJbu-ln3Y4Abk",
    authDomain: "fir-32f4c.firebaseapp.com",
    projectId: "fir-32f4c",
    storageBucket: "fir-32f4c.appspot.com",
    messagingSenderId: "148218603533",
    appId: "1:148218603533:web:aae2b49eee43c610a6cd44",
    measurementId: "G-EE0TPBYNJP"
  };

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth ()

export {db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,collection,addDoc}