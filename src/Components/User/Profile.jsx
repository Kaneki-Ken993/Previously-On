import React, { useState } from "react";
import { IsLoggedIn } from "../Auth/IsLoggedIn";
import NotLoggedIn from "../Auth/NotLoggedIn";
import Infos from "./Info";
import { Grid2 } from "@mui/material";

const Profile = () => {
  const [isLoggedIn] = useState(IsLoggedIn());

  return (
    <Grid2 container justifyContent="space-evenly">
      {isLoggedIn ? (
        <Grid2 lg={12} md={12} sm={12} xs={12}>
          <Infos />
        </Grid2>
      ) : (
        <Grid2 lg={12} md={12} sm={12} xs={12}>
          <NotLoggedIn />
        </Grid2>
      )}
    </Grid2>
  );
};

export default Profile;