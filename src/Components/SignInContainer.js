import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Box, Stack, Typography, useTheme } from "@mui/material";
import TextFieldCustom from "./TextFieldCustom";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "./Loader";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function SignInContainer() {
  const { toggleSignUp, signIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const showLoaderAndNavigate = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/private/private-home");
    }, 1000);
  };

  const onSubmit = async (data) => {
    const cred = await signIn(data.email, data.password);
    if (cred.code) {
      setValidation("Email or password is incorrect");
    } else {
      showLoaderAndNavigate();
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <>
      <Box className="sign-up-container">
        <h2>Sign In</h2>
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
                  error={errors.email || validation ? true : false}
                  helperText={
                    errors.email
                      ? errors.email.message
                      : false || validation
                      ? validation
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
            Premiere fois sur bussager ?
          </Typography>
          <Typography
            color={theme.palette.primary.green}
            onClick={toggleSignUp}
          >
            {" "}
            Insicrivez vous
          </Typography>
        </div>
      </Box>
    </>
  );
}
