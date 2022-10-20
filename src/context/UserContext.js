import React, { useState, createContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: true,
  });

  const toggleSignIn = () => {
    setModalState({
      signUpModal: false,
      signInModal: true,
    });
  };

  const toggleSignUp = () => {
    setModalState({
      signUpModal: true,
      signInModal: false,
    });
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleSignUp, toggleSignIn, signUp }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
