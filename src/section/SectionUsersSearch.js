import { Box } from "@mui/material";
import React from "react";
import Navigation from "../components/Navigation";
import SearchAndListOfConversations from "../components/SearchAndListOfConversations";

export default function SectionUsersSearch() {
  return (
    <div className="SectionUsersSearch">
      <Box
        height={"100vh"}
        sx={{
          display: "flex",
        }}
      >
        <Navigation />
        <SearchAndListOfConversations />
      </Box>
    </div>
  );
}
