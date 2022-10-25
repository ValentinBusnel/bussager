import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Box, Button, Stack, useTheme, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useValidation from "../hook/useValidation";
import TextFieldCustom from "./TextFieldCustom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function SignUpContainer() {
  const { toggleSignIn, signUp } = useContext(UserContext);
  const formRef = useRef();
  const validationSignup = useValidation();
  const theme = useTheme();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const cred = await signUp(data.email, data.password);
    if (cred.code) {
      validationSignup(cred.code, data);
    } else {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Box className="sign-up-container">
        <h2>Sign Up</h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={1}>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <TextFieldCustom
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  label={"E-mail"}
                  type={"email"}
                  error={
                    errors.email || validationSignup().email ? true : false
                  }
                  helperText={
                    errors.email || validationSignup().email
                      ? validationSignup().email
                      : false
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextFieldCustom
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  label={"Password"}
                  type={"password"}
                  error={errors.password ? true : false}
                  helperText={errors.password ? errors.password.message : false}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextFieldCustom
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  label={"Confirm password"}
                  type={"password"}
                  error={errors.confirmPassword ? true : false}
                  helperText={
                    errors.confirmPassword
                      ? errors.confirmPassword.message
                      : false
                  }
                />
              )}
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
