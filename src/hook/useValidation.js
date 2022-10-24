import { useState } from "react";

export default function useValidation() {
  const [inputSignUp, setInputSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    repeatPwd: "",
  });
  const validationSignup = (error, props) => {
    if (error === "auth/email-already-in-use") {
      setInputSignUp({ email: "Email already in use" });
    }
    return inputSignUp;
  };
  return validationSignup;
}
