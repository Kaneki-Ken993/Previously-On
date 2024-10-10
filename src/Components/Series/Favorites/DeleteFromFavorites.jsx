import React, { useState } from "react";
import axios from "axios";
import { useStyles } from "../../Styles/Style";
import { Button, Typography, Alert } from "@mui/material";

const DeleteFromFavorites = ({ show }) => {
  const [error, setError] = useState("");
  const classes = useStyles();

  const deleteShow = (id) => {
    let token = localStorage.getItem("token");
    let apiUrl = `http://localhost:8000/favorites/delete/${token}/${id}`;

     axios
       .delete(apiUrl)
       .then(() => {
         window.location.reload(false);
       })
       .catch((err) => {
         console.log(err.response.data);
       });
  };

  return (
    <Button
      onClick={() => {
        deleteShow(show.id);
      }}
      color="primary"
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
        Supprimer des favoris
      </Typography>
    </Button>
  );
};

export default DeleteFromFavorites;
