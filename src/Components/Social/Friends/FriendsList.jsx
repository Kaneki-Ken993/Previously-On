import React, { useEffect, useState } from "react";
import axios from "axios";

import { useStyles } from "../../Styles/Style";
import BlockFriend from "./BlockFriend";
import DeleteFriend from "./DeleteFriend";

/**
 * Material-UI imports
 */

import { Box, Card, CardContent, CardActions, Typography, Link, Alert } from "@mui/material";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const getFriends = () => {
      let token = localStorage.getItem("token");
      let apiUrl = `http://localhost:8000/friend/list/${token}`;

      axios.get(apiUrl)
        .then((response) => {
          setSuccess("ok");
          setFriends(response.data.users);
        })
        .catch((error) => {
          setError(error.response.data);
        });
    };

    getFriends();
  }, []);

  return (
    <Box className={classes.subContainer}>
      <Typography variant="h6" color="primary" className={classes.headingText}>
        Vos amis
      </Typography>
      {success && (
        <Box className={classes.flexContainer}>
          <Box className={classes.flexContainer}>
            {friends.map((friend, index) => {
              return (
                <Card key={index} className={classes.extraSmallCard}>
                  <CardContent>
                    <Link href={`/profil/${friend.id}`}>
                      <Typography
                        variant="h6"
                        color="primary"
                        className={classes.subheadingText}
                      >
                        {friend.login}
                      </Typography>
                    </Link>
                    <Typography
                      variant="h6"
                      color="primary"
                      className={classes.text}
                    >
                      {friend.xp} xp
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.alignButton}>
                    <DeleteFriend friend={friend} />
                    <BlockFriend friend={friend} />
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
      )}
      {error && (
        <Alert severity="error" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            {error}
          </Typography>
        </Alert>
      )}
    </Box>
  );
};

export default FriendsList;
