import React, { useState, useEffect } from "react";
import { useStyles } from "../Styles/Style";
import { IsLoggedIn } from "../Auth/IsLoggedIn";
import { Grid2, Link, Typography } from "@mui/material";

const Menu = () => {
  const [login, setLogin] = useState("");
  const [isLoggedIn] = useState(IsLoggedIn());
  const classes = useStyles();

  const getUserLogin = () => {
    let userLogin = localStorage.getItem("Login");
    if (userLogin) {
      setLogin(userLogin);
    } else {
      setLogin(null);
    }
  };

  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <Grid2 container justifyContent="space-evenly" spacing={1}>
      {isLoggedIn ? (
        <Grid2 container justifyContent="space-evenly" className={classes.justifyText}>
          <Grid2 lg={12} md={12} sm={12} xs={12}>
            <Grid2 container justifyContent="space-around" className={classes.menuList}>
              <Grid2
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className={classes.justifyText}
              >
                <Link href="/profile" className={classes.menuLink}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Hello {login} !
                  </Typography>
                </Link>
              </Grid2>
              <Grid2 lg={2} md={2} sm={2} xs={2}>
                <Link href="/series" className={classes.menuLink}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Mes séries
                  </Typography>
                </Link>
              </Grid2>
              <Grid2 lg={2} md={2} sm={2} xs={2}>
                <Link href="/favoris" className={classes.menuLink}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Mes favoris
                  </Typography>
                </Link>
              </Grid2>
              <Grid2 lg={2} md={2} sm={2} xs={2}>
                <Link href="/amis" className={classes.menuLink}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Mes amis
                  </Typography>
                </Link>
              </Grid2>
              {/* <Grid2 lg={2} md={2} sm={2} xs={2}>
                <Link href="/messagerie" className={classes.menuLink}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Messagerie
                  </Typography>
                </Link>
              </Grid2> */}
            </Grid2>
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 lg={12} md={12} sm={12} xs={12} />
      )}
    </Grid2>
  );
};

export default Menu;
