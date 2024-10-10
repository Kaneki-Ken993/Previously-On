import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStyles } from "../Styles/Style";
import { IsLoggedIn } from "../Auth/IsLoggedIn";
import NotLoggedIn from "../Auth/NotLoggedIn";
import FavoriteShow from "../Series/Favorites/SubComponents/FavoriteShow"
import StarIcon from "@mui/icons-material/Star";

// Material UI

import {
Box,
Card,
CardActions,
CardContent,
CardMedia,
Button,
Typography,
Alert,
List,
ListItem,
Grid2,
} from "@mui/material";


const apiKey = import.meta.env.API_KEY;
const SeriesLists = () => {
  const [seriesLists, setSeriesLists] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [isLoggedIn] = useState(IsLoggedIn());
  const classes = useStyles();

  const getProducts = () => {
    let token = localStorage.getItem("token");

    let apiUrl = `http://localhost:8000/series/favorite/${token}`
    axios.get(apiUrl)
        .then((response) => {
          setSeriesLists(response.data.shows);
          setSuccess(true);
        })
        .catch((error) => {
            setError(error.response.data);
        });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const limitationCaractere = (text) => {
    if (text.length > 120) {
      let newText = text.substring(0, 120) + " ...";
      return newText;
    } else {
      return text;
    }
  };

  const addToArchive = (seriesId) => {
    try {
      axios.post(
      "http://localhost:8000/series/archive",
      {
        id: seriesId,
        token: localStorage.getItem("token"),
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
          "X-BetaSeries-Key": apiKey,
        },
      }
    );
    getProducts();
  } catch (error) {
    setError(error.response?.data || "An error occurred");
  }
  };

  const deleteToArchive = (seriesId) => {
    const data = {
      id: seriesId,
      token: localStorage.getItem("token"),
    }
    const headers = {
      Authorization: localStorage.getItem("token"),
      "X-BetaSeries-Key": apiKey,
    };
      try {
        axios
          .delete(
            "http://localhost:8000/series/archive/delete", {data}, {headers})
          .then(() => {
            getProducts();
          });
      } catch (error) {
        setError(error.response?.data || "An error occurred");
      }
  };
  const buttonArchiver = (value) => {
    if (value.user.archived === false) {
      return (
        <Button
          size="small"
          color="primary"
          onClick={() => {
            addToArchive(value.id);
          }}
          className={classes.cardButton}
        >
          <Typography variant="body1" color="primary" className={classes.text}>
            Archiver
          </Typography>
        </Button>
      );
    } else {
      return (
        <Button
          size="small"
          color="primary"
          onClick={() => {
            deleteToArchive(value.id);
          }}
          className={classes.cardButton}
        >
          <Typography variant="body1" color="primary" className={classes.text}>
            Sortir des archives
          </Typography>
        </Button>
      );
    }
  };

  return isLoggedIn ? (
    <Box className={classes.container}>
      <Typography variant="h6" color="primary" className={classes.headingText}>
        Vos séries
      </Typography>
      <Box className={classes.flexContainer}>
        {error && (
          <Alert severity="error" className={classes.smallAlert}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.text}
            >
              {error}
            </Typography>
          </Alert>
        )}
        {success &&
          seriesLists.map((value, index) => {
            return (
              <Card key={index} className={classes.card}>
                <CardContent>
                  <Grid2 container justifyContent="space-evenly">
                    <Grid2 lg={12} md={12} sm={12} xs={12}>
                      <CardMedia
                        className={classes.cardImg}
                        image={value.images.show}
                      />
                    </Grid2>
                    <Grid2 lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="h6"
                        color="primary"
                        className={classes.headingText}
                      >
                        {value.title}
                      </Typography>
                    </Grid2>
                    <Grid2
                    
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className={classes.menuList}
                    >
                      {Object.keys(value.genres).map((genre, i) => {
                        return (
                          <Typography
                            key={i}
                            variant="body2"
                            color="primary"
                            className={classes.marginText}
                          >
                            {genre}
                          </Typography>
                        );
                      })}
                    </Grid2>
                    <Grid2 lg={12} md={12} sm={12} xs={12}>
                      <List className={classes.menuList}>
                        <ListItem>
                          <StarIcon color="primary" className={classes.icon} />
                          <Typography
                            variant="body1"
                            color="primary"
                            className={classes.text}
                          >
                            {value.notes.mean.toFixed(0)} / 5
                          </Typography>
                        </ListItem>
                      </List>
                    </Grid2>
                    <Grid2 lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="body1"
                        color="primary"
                        className={classes.text}
                      >
                        {limitationCaractere(value.description)}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </CardContent>
                <CardActions className={classes.alignButton}>
                  {buttonArchiver(value)}
                  <Button
                    size="small"
                    color="primary"
                    href={`/series/${value.id}`}
                    className={classes.cardButton}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.text}
                    >
                      Voir plus
                    </Typography>
                  </Button>
                  <FavoriteShow value={value} />
                </CardActions>
              </Card>
            );
          })}
      </Box>
    </Box>
  ) : (
    <NotLoggedIn />
  );
};

export default SeriesLists;
