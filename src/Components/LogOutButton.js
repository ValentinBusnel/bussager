import React from "react";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";

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
      <Button
        className="button"
        size="large"
        color="primary"
        type="submit"
        variant="contained"
        onClick={logOut}
      >
        Logout
      </Button>
    </div>
  );
}
