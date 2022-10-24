import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import TextFieldCustom from "./TextFieldCustom";

export default function SignInContainer() {
  const { toggleSignUp } = useContext(UserContext);
  const theme = useTheme();

  return (
    <>
      <div className="sign-in-container">
        <h2>S'identifier</h2>
        <Stack direction="column" spacing={1}>
          <form>
            <TextFieldCustom label="E-mail" />
            <TextFieldCustom label="Password" />
          </form>
          <Button className="button" size="large" variant="contained">
            S'identifier
          </Button>
          <div className="toggle-text">
            <Typography variant="contained">
              Première visite sur Bussager ?
            </Typography>
            <Typography
              color={theme.palette.primary.green}
              onClick={toggleSignUp}
            >
              {" "}
              Inscrivez-vous.
            </Typography>
          </div>
        </Stack>
      </div>
    </>
  );
}
