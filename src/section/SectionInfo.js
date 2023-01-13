import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import HeaderChat from "../components/HeaderChat";
import UserDataInfo from "../components/UserDataInfo";

export default function SectionInfo() {
  return (
    <div className="SectionInfo">
      <Box
        height={"100vh"}
        sx={{
          backgroundColor: "secondary.elevation",
        }}
      >
        <Box
          width={"100%"}
          height={"100px"}
          padding={"0 32px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Profile</Typography>
        </Box>
        <Divider variant="middle" color={"grey"} />
        <HeaderChat profileSection={true} />
        <UserDataInfo />
        <Divider variant="middle" color={"grey"} />
      </Box>
    </div>
  );
}
