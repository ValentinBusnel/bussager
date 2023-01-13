import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useValidation from "../hook/useValidation";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { db } from "../config/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import * as yup from "yup";
import Loader from "./Loader";
import { updateProfile } from "firebase/auth";
import ControllerCustom from "./ControllerCustom";

const schema = yup
  .object({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email().required("Email is required"),
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
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const showLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (user) => {
    const cred = await signUp(user.email, user.password);
    showLoader();
    const displayName = user.firstName.concat(" ", user.lastName);
    if (cred.code) {
      validationSignup(cred.code, user);
    } else {
      await updateProfile(cred.user, {
        displayName: displayName,
      });
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        displayName: displayName,
        email: user.email,
      });
      await setDoc(doc(db, "userChats", cred.user.uid), {});
      navigate("/private/private-home");
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <>
      <Box className="sign-up-container">
        <h2>Bienvenue</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={1}>
            <ControllerCustom
              control={control}
              name="firstName"
              label={"First Name"}
              type={"text"}
              error={errors.firstName ? true : false}
              helperText={errors.firstName ? errors.firstName.message : false}
            />
            <ControllerCustom
              control={control}
              name="lastName"
              label={"Last Name"}
              type={"text"}
              error={errors.lastName ? true : false}
              helperText={errors.lastName ? errors.lastName.message : false}
            />
            <ControllerCustom
              control={control}
              name="email"
              label={"E-mail"}
              type={"email"}
              error={errors.email || validationSignup().email ? true : false}
              helperText={
                errors.email
                  ? errors.email.message
                  : false || validationSignup().email
                  ? validationSignup().email
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
            <ControllerCustom
              control={control}
              name="confirmPassword"
              label={"Confirm password"}
              type={"password"}
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : false
              }
            />
            <Button
              className="button"
              size="large"
              color="primary"
              type="submit"
              variant="contained"
              style={{
                borderRadius: "10px",
              }}
            >
              S'inscrire
            </Button>
          </Stack>
        </form>
        <div className="toggle-text">
          <Typography variant="contained">
            Vous avez déja un compte ?
          </Typography>
          <Typography color="primary" onClick={toggleSignIn}>
            {" "}
            Connectez vous
          </Typography>
        </div>
      </Box>
    </>
  );
}
