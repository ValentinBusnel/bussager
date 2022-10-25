import React from "react";
import { TextField, useTheme } from "@mui/material";

export default function TextFieldCustom(props) {
  const theme = useTheme();

  return (
    <>
      <TextField
        sx={{
          "& .MuiInputBase-input": {
            borderRadius: "1px",
            color: theme.palette.primary.white,
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: theme.palette.primary.grey,
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
        }}
        margin="dense"
        variant="outlined"
        fullWidth
        {...props}
      />
    </>
  );
}
