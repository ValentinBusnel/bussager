import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Button, useTheme } from "@mui/material";
import {
  collection,
  query,
  onSnapshot,
  getDoc,
  setDoc,
  getDocs,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

export default function UserCard(username) {
  const { users } = useContext(UserContext);

  return <></>;
}
