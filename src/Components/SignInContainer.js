import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "./Loader";
import ControllerCustom from "./ControllerCustom";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function SignInContainer() {
  const { toggleSignUp, signIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");
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
        <h2>BUSSAGER</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={1}>
            <ControllerCustom
              control={control}
              name="email"
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
            <ControllerCustom
              control={control}
              name="password"
              label={"Password"}
              type={"password"}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : false}
            />
            <Button
              className="button"
              size="large"
              color="primary"
              type="submit"
              variant="contained"
              style={{ borderRadius: "10px" }}
            >
              Se connecter
            </Button>
          </Stack>
        </form>
        <div className="toggle-text">
          <Typography variant="contained">
            Premiere fois sur bussager ?
          </Typography>
          <Typography color="primary" onClick={toggleSignUp}>
            {" "}
            Insicrivez vous
          </Typography>
        </div>
      </Box>
    </>
  );
}
