import { Avatar, Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import ControllerCustom from "./ControllerCustom";

const schema = yup.object({
  message: yup.string().required(),
});

export default function TypeMessage() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (message) => {
    console.log(message);
  };
  return (
    <div>
      <Box
        height={"100px"}
        width={"100%"}
        sx={{
          backgroundColor: "secondary.elevation",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 32px",
        }}
      >
        <form className="testform" onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <ControllerCustom
              control={control}
              name="message"
              label={"Ecrivez votre message..."}
              type={"text"}
            />
          </Stack>
        </form>
      </Box>
    </div>
  );
}
