import React, {useState} from "react";
import axios from "axios";
import {useStyles} from "../Styles/Style";
import { Box, Button, TextField, Typography, Card, CardContent, CardActions, Alert, CardMedia } from "@mui/material";


const SearchResults = ({shows}) => { 
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const classes = useStyles();

    const limitations = (text) => { 
        if (text.length > 80) {
            let newText = text.substring(0, 80) + " ...";
            return newText;
        } else {
            return text;
        }
     };


    const handleClick = async () => {
        let showId;
        shows.map((show) => {
            return showId = show.id;
        });

        let token = localStorage.getItem('token');
        let apiUrl = "http://localhost:8000/series/add";
        let data = {
            id : showId,
            token : token
        }

        await axios.post(apiUrl, data)
            .then((response) => {
                setSuccess(true);
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    }

    return (
      <Box>
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

        {success && (
          <Alert severity="success" className={classes.smallAlert}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.text}
            >
              La série a été ajoutée !
            </Typography>
          </Alert>
        )}

        <Typography variant="h6" color="primary" className={classes.headingText}> Résultats de votre recherche :</Typography>
        <Box className={classes.flexContainer}>
          {
            shows.map((show, index) => {
              return (
                <Card key={index} className={classes.card}>
                  <CardContent>
                    <CardMedia
                      className={classes.cardImg}
                      image={show.images.show}
                    />
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.headingText}
                    >
                      {show.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.text}
                    >
                      {show.creaion} - {show.seasons} saisons
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.text}
                    >
                      {limitations(show.description)}
                    </Typography>
                  </CardContent>
                  {!success && (
                    <CardActions className={classes.cardButton}>
                      <Button
                        size="small"
                        className={classes.cardButton}
                        href={`/series/${show.id}`}
                      >
                        <Typography
                          variant="body1"
                          color="pirmary"
                          className={classes.text}
                        >
                          Voir plus
                        </Typography>
                      </Button>
                      {isLoggedIn ? (
                          <Button
                            size="small"
                            className={classes.cardButton}
                            onClick={handleClick}
                            href={`/series/${show.id}`}
                          >
                            <Typography
                              variant="body1"
                              color="primary"
                              className={classes.text}
                            >
                              Ajouter à vos séries
                            </Typography>
                          </Button>
                      ) : (
                        <></>
                      )}
                    </CardActions>
                  )}
                </Card>
              );
            })
          }
        </Box>
      </Box>
    );
 }


 export default SearchResults;