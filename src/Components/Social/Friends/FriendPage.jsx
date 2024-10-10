import React, { useState } from "react";

import FriendsList from "./FriendsList";
import SearchMembers from "../Members/SearchMembers";
import BlockedList from "./BlockedList";
import NotLoggedIn from "../../Auth/NotLoggedIn";
import { IsLoggedIn } from "../../Auth/IsLoggedIn";
import { Grid2 } from "@mui/material";

const FriendPage = () => {
  const [isLoggedIn] = useState(IsLoggedIn());

  return (
    <Grid2 container justifyContent="space-evenly">
      {isLoggedIn ? (
        <>
          <Grid2 item lg={12} md={12} sm={12} xs={12}>
            <FriendsList />
          </Grid2>
          <Grid2 item lg={12} md={12} sm={12} xs={12}>
            <SearchMembers />
          </Grid2>
          <Grid2 item lg={12} md={12} sm={12} xs={12}>
            <BlockedList />
          </Grid2>
        </>
      ) : (
        <NotLoggedIn />
      )}
    </Grid2>
  );
};

export default FriendPage;
