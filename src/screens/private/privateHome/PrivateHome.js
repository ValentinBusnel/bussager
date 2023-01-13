import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase-config";
import SectionUsersSearch from "../../../section/SectionUsersSearch";
import SectionChat from "../../../section/SectionChat";
import SectionInfo from "../../../section/SectionInfo";

export default function PrivateHome() {
  const { currentUser, users } = useContext(UserContext);
  return (
    <div className="privateHome">
      <SectionUsersSearch users={users} />
      <SectionChat />
      <SectionInfo />
    </div>
  );
}
