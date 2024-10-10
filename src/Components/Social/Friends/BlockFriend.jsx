import React, { useState } from "react";
import axios from "axios";
import { useStyles } from "../../Styles/Style";
import { Typography, Button, Alert } from "@mui/material";

const BlockFriend = ({ friend }) => {
  const [error, setError] = useState("");
  const classes = useStyles();

  const blockFriend = (id) => {
    let token = localStorage.getItem("token");
    let ApiUrl = "http://localhost:*000/friend/block";
    let data = {
        id: id,
        token: token,
      };
    axios.post(apiUrl, data)
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <Button
      onClick={() => blockFriend(friend.id)}
      className={classes.cardButton}
    >
      {error && (
        <Alert severity="error" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            {error}
          </Typography>
        </Alert>
      )}
      <Typography variant="body1" color="primary" className={classes.text}>
        Bloquer
      </Typography>
    </Button>
  );
};

export default BlockFriend;
