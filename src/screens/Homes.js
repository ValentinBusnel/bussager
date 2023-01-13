import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SignInContainer from "../components/SignInContainer";
import SignUpContainer from "../components/SignUpContainer";
import logo from "../assets/img/cercle.svg";
import BussagerLogo from "../components/BussagerLogo";

export default function Homes() {
  const { modalState } = useContext(UserContext);

  return (
    <div className="screen screen-home">
      <BussagerLogo />
      <img className="wallpaper" src={logo} alt="logo" />
      {modalState.signInModal ? <SignInContainer /> : <SignUpContainer />}
    </div>
  );
}
