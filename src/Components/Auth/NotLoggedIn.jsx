import React from "react";
import { Alert, AlertTitle, Box, Link, Typography } from "@mui/material";
import { useStyles } from "../Styles/Style";



const NotLoggedIn = () => {
    const classes = useStyles();
    return (
      <Box className={classes.container}>
        <Alert severity="info" className={classes.smallAlert}>
          <AlertTitle>
            <Typography
              variant="6"
              color="primary"
              className={classes.headingText}
            >
              {" "}
              Accés non autorisé{" "}
            </Typography>
          </AlertTitle>
          <Typography variant="body1" color="primary" className={classes.text}>
            Pour accéder à cette page, vous devez vous connecter en cliquant sur
            le lien ci-dessous.
          </Typography>
        </Alert>
        <Link href="/" className={classes.menuLink}>
          <Typography variant="body1" color="primary" className={classes.text}>
            Se connecter
          </Typography>
        </Link>
      </Box>
    );
};

export default NotLoggedIn;