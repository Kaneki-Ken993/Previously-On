import React, { useState, useEffect } from "react";
import axios from "axios";

import { useStyles } from "../../Styles/Style";

/**
 * Material-UI imports
 */

import {
Box,
Card,
CardContent,
CardActions,
Button,
Typography,
Alert,
} from "@mui/material";

const BlockedList = () => {
  const [users, setUsers] = useState([]);
  const [emptyList, setEmptyList] = useState(null);
  const classes = useStyles();

  const getUsers = () => {
    let token = localStorage.getItem("token");
    let apiUrl = `http://localhost:8000/friend/blocked/${token}`;

    axios.get(apiUrl).then((response) => {
      if (response.data.users.length < 1) {
        setEmptyList(true);
      } else {
        setUsers(response.data.users);
        setEmptyList(false);
      }
    });
  };

  const handleUnblock = (id) => {
    let apiUrl = "http://localhost:8000/friend/unblock";
    let token = localStorage.getItem("token");
    let userId = id;
    let data = {
      id: userId,
      token: token,
    };

    axios.delete(apiUrl, data).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h6" color="primary" className={classes.headingText}>
        Membres bloqués
      </Typography>
      {emptyList ? (
        <Alert severity="info" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            Vous n'avez bloqué personne.
          </Typography>
        </Alert>
      ) : (
        <Box className={classes.flexContainer}>
          {users.map((user, index) => {
            return (
              <Card key={index} className={classes.extraSmallCard}>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.headingText}
                  >
                    {user.login}
                  </Typography>
                </CardContent>
                <CardActions className={classes.alignButton}>
                  <Button
                    color="primary"
                    size="small"
                    className={classes.cardButton}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      onClick={() => handleUnblock(user.id)}
                      className={classes.text}
                    >
                      Débloquer
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default BlockedList;
