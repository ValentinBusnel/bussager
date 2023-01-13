import { Box, Divider, Stack, IconButton, Avatar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import logo from "../assets/img/cercle.svg";
import React from "react";
import LogOutButton from "./LogOutButton";

export default function Navigation() {
  return (
    <div>
      <Box
        height={"100vh"}
        width={"100px"}
        padding={"32px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack spacing={4}>
          <img src={logo} alt="logo" />
          <IconButton color="white" aria-label="add to shopping cart">
            <DashboardIcon />
          </IconButton>
          <IconButton color="white" aria-label="add to shopping cart">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton color="white" aria-label="add to shopping cart">
            <CalendarMonthIcon />
          </IconButton>
          <IconButton color="white" aria-label="add to shopping cart">
            <PeopleAltIcon />
          </IconButton>
        </Stack>
        <Stack spacing={4} alignItems="center">
          <IconButton color="white" aria-label="add to shopping cart">
            <SettingsIcon />
          </IconButton>
          <LogOutButton />
          <Divider width={"24px"} color={"grey"} />
          <Avatar variant="rounded">VB</Avatar>
        </Stack>
      </Box>
    </div>
  );
}
