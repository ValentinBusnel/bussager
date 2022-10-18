import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Box, TextField } from "@mui/material";

export default function SignUpContainer() {
  const { toggleSignIn } = useContext(UserContext);

  return (
    <>
      <Box className="sign-in-container">
        <h2>Sign Up</h2>
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
          <TextField
            className="repeat-password password-input input"
            fullWidth
            id="outlined-basic"
            label="Repeat Password"
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
          <TextField
            className="repeat-password password-input input"
            fullWidth
            id="outlined-basic"
            label="Repeat Password"
            variant="outlined"
            margin="dense"
          />
        </form>
        <h4 onClick={toggleSignIn}>I have a account</h4>
      </Box>
    </>
  );
}
