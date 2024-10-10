import React, { useState, useEffect } from "react";
import axios from "axios";
import { IsLoggedIn } from "../Auth/IsLoggedIn";
import NotLoggedIn from "../Auth/NotLoggedIn";
import { useStyles } from "../Styles/Style";
import Stats from "./Stats";
import Popcorn from "/src/assets/popcorn.png";
import {Box, Typography, Card, CardContent, CardMedia, Alert} from "@mui/material";

const Infos = () => {
  const [infos, setInfos] = useState([]);
  const [stats, setStats] = useState([]);
  const [error, setError] = useState("");
  const [isLoggedIn] = useState(IsLoggedIn());
  const classes = useStyles();

  const getUserInfos = () => {
    let id = localStorage.getItem("Id");
    let apiUrl = `http://localhost:8000/user/${id}`;

    axios
      .get(apiUrl)
      .then((res) => {
        setInfos(res.data.member);
        setStats(res.data.member.stats);
      })
      .catch((err) => {
        setError(err.response);
      });

  };

  useEffect(() => {
    getUserInfos();
  }, []);

  return isLoggedIn ? (
    <Box className={classes.container}>
      {error && (
        <Alert severity="error" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            {error}
          </Typography>
        </Alert>
      )}
      <Card className={classes.smallCard}>
        <CardContent>
          <CardMedia
            image={infos.avatar || Popcorn}
            className={classes.cardAvatar}
          />
          <Typography
            variant="h6"
            color="primary"
            className={classes.headingText}
          >
            {infos.login}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className={classes.headingText}
          >
            {infos.xp} xp
          </Typography>
          <Stats stats={stats} />
        </CardContent>
      </Card>
    </Box>
  ) : (
    <NotLoggedIn />
  );
};

export default Infos;
