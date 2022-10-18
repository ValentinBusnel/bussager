import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bussage-80a8e.firebaseapp.com",
  projectId: "bussage-80a8e",
  storageBucket: "bussage-80a8e.appspot.com",
  messagingSenderId: "342867446020",
  appId: "1:342867446020:web:b48591297a893ec93fe851",
  measurementId: "G-2L3X6GBT39",
};

const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);
