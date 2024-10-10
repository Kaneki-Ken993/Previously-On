import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStyles } from "../Styles/Style";
import {
Box,
Card,
CardContent,
CardActions,
Typography,
Button,
Alert,
CardMedia,
} from "@mui/material";

const News = () => {
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState([]);
  const classes = useStyles();

  const getnews = () => {
    try {
        axios
          .get("http://localhost:8000/series/news")
          .then((res) => {
            setNews(res.data.news);
          })
          .catch((err) => {
            setErrors(err.message);
          });
    } catch (error) {
        setErrors(error.response);
    }
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <Box className={classes.container}>
      {errors &&
        errors.map((error, index) => {
          return (
            <Alert
              key={index}
              severity="error"
              className={classes.smallAlert}
              id="top"
            >
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {error.text}
              </Typography>
            </Alert>
          );
        })}
      <Box className={classes.flexContainer}>
        {news.map((item, index) => {
          return (
            <Card key={index} className={classes.card}>
              <CardContent>
                <CardMedia
                  className={classes.cardImg}
                  image={item.picture_url}
                />
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.headingText}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.text}
                >
                  publié le {item.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  className={classes.cardButton}
                  target="_blank"
                  href={item.url}
                >
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                  >
                    Lire
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default News;
