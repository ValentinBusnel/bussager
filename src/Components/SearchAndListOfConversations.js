import { Box } from "@mui/material";
import React from "react";
import ListOfConversation from "./ListOfConversation";
import { chatData } from "../data/chatData";
import SearchUser from "./SearchUser";

export default function SearchAndListOfConversations() {
  console.log(chatData);
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      sx={{ backgroundColor: "secondary.elevation" }}
    >
      <SearchUser />
      {chatData.map((user) => {
        return (
          <ListOfConversation
            key={user.id}
            username={user.userName}
            message={user.message}
          ></ListOfConversation>
        );
      })}
    </Box>
  );
}
