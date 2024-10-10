import React, { useState } from "react";
import axios from "axios";
import { useStyles } from "../../Styles/Style";
import { Typography, Button, Alert } from "@mui/material";

const DeleteFriend = ({ friend }) => {
  const [error, setError] = useState("");
  const classes = useStyles();

  const deleteFriend = (id) => {
    let token = localStorage.getItem("token");
    let apiUrl = "http://localhost:*000/friend/delete";

    let data = {
      id: id,
      token: token,
    };

    axios(apiUrl, data)
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <Button
      onClick={() => deleteFriend(friend.id)}
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
        Supprimer
      </Typography>
    </Button>
  );
};

export default DeleteFriend;
