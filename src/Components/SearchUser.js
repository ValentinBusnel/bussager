import React, { useContext, useState } from "react";
import { useTheme, Autocomplete, TextField, Box } from "@mui/material";
import { UserContext } from "../context/UserContext";
import {
  setDoc,
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { width } from "@mui/system";

export default function SearchUser() {
  const theme = useTheme();
  const { users, currentUser } = useContext(UserContext);
  const [username, setUsername] = useState();
  const [recentlyUser, setRecentlyUser] = useState([]);

  const handleChange = async (event, value) => {
    if (value?.id) {
      const combinedId =
        currentUser.uid > value.id
          ? currentUser.uid + value.id
          : value.id + currentUser.uid;
      try {
        await getDoc(doc(db, "chats", combinedId));
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: value.id,
            displayName: value.label,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", value.id), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      } catch (error) {}
    }
  };

  return (
    <Box width={"100%"}>
      <Box className="p-5" height={"100px"}>
        <Autocomplete
          fullWidth
          disablePortal
          id="combo-box-demo"
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(event, value) => handleChange(event, value)}
          options={users}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-input": {
                  color: theme.palette.secondary.white,
                  border: "10px",
                },
                "& .css-i4bv87-MuiSvgIcon-root": {
                  color: theme.palette.secondary.white,
                },
                "& .MuiAutocomplete-clearIndicator": {
                  color: theme.palette.secondary.white,
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: theme.palette.primary.main,
                },
                "& .MuiFormLabel-root": {
                  color: theme.palette.secondary.grey,
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.white,
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.secondary.grey,
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.white,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
              {...params}
              style={{ borderRadius: "10px" }}
              label="Search"
            />
          )}
        />
      </Box>
    </Box>
  );
}
