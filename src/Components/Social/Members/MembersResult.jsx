import React, { useState } from "react";
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

const MembersResult = ({ users }) => {

  const [success, setSucess] = useState(null);
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleClick = async () => {
    let userId;
    users.map((user) => {
      return (userId = user.id);
    });

    let token = localStorage.getItem("token");
    let apiUrl = "http://localhost:8000/friend";
    let data = {
      id: userId,
      token: token,
    };

    await axios.post(apiUrl, data)
      .then((response) => {
        setSucess(true);
        window.location.reload(false);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <Box className={classes.flexContainer}>
      {error && (
        <Alert severity="error" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            {error}
          </Typography>
        </Alert>
      )}
      {success && (
        <Alert severity="info" className={classes.smallAlert}>
          <Typography variant="body1" color="primary" className={classes.text}>
            Votre demande d'ami a été envoyée !
          </Typography>
        </Alert>
      )}
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
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {user.xp} xp
              </Typography>
            </CardContent>
            {!success && (
              <CardActions className={classes.alignButton}>
                <Button
                  size="small"
                  onClick={handleClick}
                  className={classes.cardButton}
                >
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Ajouter en ami
                  </Typography>
                </Button>
              </CardActions>
            )}
          </Card>
        );
      })}
    </Box>
  );
};

export default MembersResult;
