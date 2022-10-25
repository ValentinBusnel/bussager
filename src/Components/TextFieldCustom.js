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
                    color: theme.palette.primary.white,
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
