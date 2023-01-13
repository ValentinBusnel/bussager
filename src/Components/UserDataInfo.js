import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function UserDataInfo() {
  return (
    <Box sx={{ padding: "16px 32px 32px 32px" }}>
      <Stack color={"secondary.grey"} spacing={3}>
        <Box>
          <Typography color={"secondary.white"}>About</Typography>
          <Typography variant="subtitle2">
            Joueur du Paris Saint Germain et champion du monde
          </Typography>
        </Box>
        <Box>
          <Typography color={"secondary.white"}>Téléphone</Typography>
          <Typography variant="subtitle2">(+33) 6 37 45 71 82</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
