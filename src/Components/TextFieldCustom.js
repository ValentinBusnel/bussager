import React from "react";
import { TextField, useTheme, styled } from "@mui/material";

export default function TextFieldCustom(fieldProps) {
  const theme = useTheme();

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: theme.palette.primary.green,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.primary.grey,
      "&:hover fieldset": {
        borderColor: theme.palette.primary.white,
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.grey,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.white,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.green,
      },
    },
  });
  return (
    <>
      <CssTextField
        inputProps={{ color: theme.palette.primary.green }}
        id="custom-css-outlined-input"
        margin="dense"
        fullWidth
        {...fieldProps}
      />
    </>
  );
}
