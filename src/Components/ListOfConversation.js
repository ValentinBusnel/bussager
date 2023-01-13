import { Avatar, Box, Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export default function ListOfConversation(props) {
  const initial = props.username
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <Box>
      <Card
        height={"100px"}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          padding: "16px",
          backgroundColor: "secondary.elevation",
          border: "none,",
        }}
        style={{ border: "none", boxShadow: "none" }}
      >
        <Stack marginRight={"16px"}>
          <Avatar variant="rounded">{initial}</Avatar>
        </Stack>
        <Stack maxWidth={"60%"}>
          <Typography variant="subtitle2" color={"secondary.white"}>
            {props.username}
          </Typography>
          <Typography variant="caption" color={"grey"}>
            {props.message}
          </Typography>
        </Stack>
      </Card>
      <Divider variant="middle" color={"grey"}></Divider>
    </Box>
  );
}
