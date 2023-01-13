import { Box } from "@mui/material";
import React, { useContext } from "react";
import Chat from "../components/Chat";
import HeaderChat from "../components/HeaderChat";
import TypeMessage from "../components/TypeMessage";
import { UserContext } from "../context/UserContext";

export default function SectionChat() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="SectionChat">
      <Box
        height={"100vh"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <HeaderChat />
        <Chat />
        <TypeMessage />
      </Box>
    </div>
  );
}
