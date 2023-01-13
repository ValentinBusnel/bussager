import React, { useState } from "react";
import { TextField, useTheme, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function TextFieldCustom(props) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TextField
        sx={{
          "& .MuiInputBase-input": {
            color: theme.palette.secondary.white,
            border: "10px",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: theme.palette.primary.white,
          },
          "& .MuiFormLabel-root": {
            color: theme.palette.secondary.grey,
            "&:hover fieldset": {
              borderColor: theme.palette.secondary.white,
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.secondary.grey,
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: theme.palette.secondary.white,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
        margin="dense"
        variant="outlined"
        fullWidth
        {...props}
        type={
          props.label.toLowerCase().includes("password")
            ? showPassword
              ? "text"
              : "password"
            : "text"
        }
        InputProps={{
          ...(props.label.toLowerCase().includes("password") && {
            endAdornment: (
              <IconButton
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.secondary.white,
                  },
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }),
        }}
      />
    </>
  );
}
