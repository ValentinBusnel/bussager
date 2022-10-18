import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
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
    <UserContext.Provider value={{ modalState, toggleSignUp, toggleSignIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
