import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Box, Button, Stack, useTheme, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useValidation from "../hook/useValidation";
import TextFieldCustom from "./TextFieldCustom";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "./Loader";

const schema = yup
  .object({
    email: yup.string().required().email("Email is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  })
  .required();

export default function SignUpContainer() {
  const { toggleSignIn, signUp } = useContext(UserContext);
  const validationSignup = useValidation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const showLoaderAndNavigate = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/private/private-home");
    }, 1000);
  };

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
      showLoaderAndNavigate();
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <>
      <Box className="sign-up-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
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
                    errors.email
                      ? errors.email
                      : false || validationSignup().email
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
            Vous avez d??ja un compte ?
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
