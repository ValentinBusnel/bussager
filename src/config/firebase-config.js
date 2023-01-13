import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bussager2.firebaseapp.com",
  projectId: "bussager2",
  storageBucket: "bussager2.appspot.com",
  messagingSenderId: "363117770381",
  appId: "1:363117770381:web:2e12c480257fff21ccd4c4",
  measurementId: "G-4PNMQK3S4D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };
