import React from "react";
import { useStyles } from "../Styles/Style";
import { 
Grid2,
Typography,
Link,
} from "@mui/material";
import Copyright from "@mui/icons-material/Copyright";

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid2 container justifyContent="space-evenly" className={classes.unstaticFooter}>
      <Grid2 lg={3} md={3} sm={3} xs={3}>
        <Copyright color="primary" />
      </Grid2>
      <Grid2 lg={9} md={9} sm={9} xs={9}>
        <Link
          href="https://github.com/Kaneki-Ken993?tab=repositories"
          target="_blank"
        >
          <Typography variant="body1" color="primary" className={classes.text}>
            Developed by Kaneki Ken & Baki Hanma
          </Typography>
        </Link>
        <Link
          href="https://www.epitech.eu/"
          target="_blank"
        >
          <Typography variant="body1" color="primary" className={classes.text}>
            Epitech
          </Typography>
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default Footer;
