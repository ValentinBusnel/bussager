import React from "react";
import { signOut } from "firebase/auth";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogOutButton() {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnecte, please check your internet connection and retry"
      );
    }
  };

  return (
    <div>
      <IconButton
        onClick={logOut}
        color="white"
        aria-label="add to shopping cart"
      >
        <LogoutIcon />
      </IconButton>
    </div>
  );
}
