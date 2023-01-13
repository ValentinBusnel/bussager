import { Avatar, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function HeaderChat(props) {
  return (
    <div>
      {props.profileSection ? (
        <Box
          width={"100%"}
          sx={{
            backgroundColor: "secondary.elevation",
            padding: "32px 32px 16px 32px",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Avatar sx={{ width: 64, height: 64 }}>LM</Avatar>
            <Typography>Lionel Messi</Typography>
          </Stack>
        </Box>
      ) : (
        <Box
          height={"100px"}
          width={"100%"}
          sx={{
            backgroundColor: "secondary.elevation",
            padding: "32px",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar>LM</Avatar>
            <Typography>Lionel Messi</Typography>
          </Stack>
        </Box>
      )}
    </div>
  );
}
