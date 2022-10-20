import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function SignUpContainer() {
  const { toggleSignIn, signUp } = useContext(UserContext);
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const cred = await signUp(data.email, data.password);
      formRef.current.reset();
      console.log(cred);
    } catch (error) {
      console.dir(error.code);
    }
  };

  return (
    <>
      <Box className="sign-in-container">
        <h2>Sign Up</h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
          <TextField
            {...register("email", { required: true })}
            className="email"
            type={"email"}
            fullWidth
            id="outlined-basic email"
            label="Email"
            variant="outlined"
            margin="dense"
            error={errors.email ? true : false}
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
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>

        <Button variant="contained" onClick={toggleSignIn}>
          I have a account
        </Button>
      </Box>
    </>
  );
}
