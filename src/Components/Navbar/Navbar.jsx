import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../Styles/Style";
import Popcorn from "/src/assets/popcorn.png";
import Menu from "../Menu/Menu";
import TheatersIcon from "@mui/icons-material/Theaters";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Grid2, List, Link, Typography, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Login");
    localStorage.removeItem("Id");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, [navigate, classes.sticky]);

  return (
    <Grid2
      container
      justifyContent="space-evenly"
      className={classes.navContainer}
      id="header"
    >
      <Grid2 lg={3} md={4} sm={3} xs={3}>
        <List className={classes.inlineList}>
          <ListItem>
            <img src={Popcorn} className={classes.icon} alt="Popcorn icon" />
            <Link href="/accueil">
              <Typography
                variant="h6"
                color="primary"
                className={classes.logo}
              >
                Previously On
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Grid2>
      <Grid2 lg={2} md={2} sm={3} xs={3}>
        <List className={classes.inlineList}>
          <ListItemIcon>
            <TheatersIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/accueil">
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Séries
              </Typography>
            </Link>
          </ListItemText>
        </List>
      </Grid2>
      <Grid2 lg={2} md={2} sm={3} xs={3}>
        <List className={classes.inlineList}>
          <ListItemIcon>
            <LibraryBooksIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/news">
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Nouvelles
              </Typography>
            </Link>
          </ListItemText>
        </List>
      </Grid2>
      {isLoggedIn && (
        <Grid2 lg={2} md={2} sm={2} xs={2}>
          <List className={classes.inlineList}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link href="/" onClick={handleLogout}>
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.headingText}
                >
                  Se déconnecter
                </Typography>
              </Link>
            </ListItemText>
          </List>
        </Grid2>
      )}
      {!isLoggedIn && (
        <Grid2 lg={2} md={2} sm={2} xs={2}>
          <List className={classes.inlineList}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link href="/">
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.headingText}
                >
                  Se connecter
                </Typography>
              </Link>
            </ListItemText>
          </List>
        </Grid2>
      )}
      <Grid2 lg={12} md={12} sm={12} xs={12}>
        <Menu />
      </Grid2>
    </Grid2>
  );
};

export default Navbar;
