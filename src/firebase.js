import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7Tj8wLNk3Sqoqm5NVM-av7_sTmGr-9Kc",
  authDomain: "commerce-309d9.firebaseapp.com",
  projectId: "commerce-309d9",
  storageBucket: "commerce-309d9.appspot.com",
  messagingSenderId: "284928825454",
  appId: "1:284928825454:web:0095c19bf00fce888dee7f",
  measurementId: "G-L9L6D2MD58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };