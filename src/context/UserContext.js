import React, { useState, createContext, useEffect } from "react";
import {
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (snapshot) => {
      // Maps the documents and sets them to the `msgs` state.
      setUsers(
        snapshot.docs.map((doc) => ({
          label: doc.data().displayName,
          id: doc.id,
        }))
      );
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  const profileUpdate = async (user, displayName, photoURL) => {
    await updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        // Profile updated!
        console.log("profile update");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential;
      })
      .catch((error) => {
        return error;
      });
  };

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential;
      })
      .catch((error) => {
        return error;
      });
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
      value={{
        modalState,
        toggleSignUp,
        toggleSignIn,
        signIn,
        signUp,
        profileUpdate,
        currentUser,
        users,
      }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
