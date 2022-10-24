import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import {
  Box,
  TextField,
  Button,
  Stack,
  useTheme,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useValidation from "../hook/useValidation";
import TextFieldCustom from "./TextFieldCustom";

export default function SignUpContainer() {
  const { toggleSignIn, signUp } = useContext(UserContext);
  const formRef = useRef();
  const validationSignup = useValidation();
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const cred = await signUp(data.email, data.password);
    if (cred.code) {
      console.log(cred.code);
      validationSignup(cred.code, data);
    } else {
      console.log(cred);
      formRef.current.reset();
    }
  };

  return (
    <>
      <Box className="sign-up-container">
        <h2>Sign Up</h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={1}>
            <TextField
              {...register("firstName", { required: true })}
              className="firstName"
              type={"text"}
              fullWidth
              id="outlined-basic first-name"
              label="First name"
              variant="outlined"
              margin="dense"
              error={errors.firstName ? true : false}
            />
            <TextField
              {...register("lastName", { required: true })}
              className="last-name"
              type={"text"}
              spacing={2}
              fullWidth
              id="outlined-basic last-name"
              label="Last name"
              variant="outlined"
              margin="dense"
              error={errors.lastName ? true : false}
            />
            {/* <TextFieldCustom
              {...register("firstName", { required: true })}
              label="Email"
              error={errors.firstName ? true : false}
            /> */}
            <TextField
              {...register("email", { required: true })}
              className="email"
              type={"email"}
              fullWidth
              id="outlined-basic email"
              label="Email"
              variant="outlined"
              margin="dense"
              error={errors.email || validationSignup().email ? true : false}
              helperText={
                validationSignup().email ? validationSignup().email : false
              }
            />
            <TextField
              {...register("password", { required: true, minLength: 6 })}
              className="password password-input input"
              type={"password"}
              spacing={2}
              fullWidth
              id="outlined-basic password"
              label="Password"
              variant="outlined"
              margin="dense"
              error={errors.password ? true : false}
            />
            <TextField
              {...register("repeatPassword", { required: true, minLength: 6 })}
              className="repeat-password password-input input"
              type={"password"}
              fullWidth
              id="outlined-basic repeat-password"
              label="Repeat Password"
              variant="outlined"
              margin="dense"
              error={errors.repeatPassword ? true : false}
            />
            <Button
              className="button"
              size="large"
              color="primary"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </form>
        <div className="toggle-text">
          <Typography variant="contained">
            Vous avez déja un compte ?
          </Typography>
          <Typography
            color={theme.palette.primary.green}
            onClick={toggleSignIn}
          >
            {" "}
            Connectez vous
          </Typography>
        </div>
      </Box>
    </>
  );
}
