import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TextField, Button } from "@mui/material";

export default function SignInContainer() {
  const { toggleSignUp } = useContext(UserContext);

  return (
    <>
      <div className="sign-in-container">
        <h2>Sign in</h2>
        <form>
          <TextField
            className="email-input input"
            fullWidth
            id="outlined-basic"
            label="Email adress"
            variant="outlined"
            margin="dense"
          />
          <TextField
            className="password password-input input"
            spacing={2}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="dense"
          />
        </form>
        <Button variant="contained" onClick={toggleSignUp}>
          Create a account
        </Button>
      </div>
    </>
  );
}
