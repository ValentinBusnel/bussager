import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SignInContainer from "../components/SignInContainer";
import SignUpContainer from "../components/SignUpContainer";
import wallpaper from "../assets/img/home.jpg";

export default function Homes() {
  const { modalState } = useContext(UserContext);

  return (
    <div className="screen screen-home">
      {modalState.signInModal ? <SignInContainer /> : <SignUpContainer />}
    </div>
  );
}
