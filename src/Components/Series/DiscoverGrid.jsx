import React, { useState, useEffect} from "react";
import axios from "axios";
import { useStyles } from "../Styles/Style";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, Alert } from "@mui/material";

const DiscoverGrid = () => { 
    const [ shows, setShows ] = useState([]);
    const [ error, setError ] = useState('');
    const classes = useStyles();

    const getShows = () => {
        axios
          .get("http://localhost:8000/series/discover")
          .then((res) => {
            setShows(res.data.shows);
          })
          .catch((err) => {
            setError(err.message);
          });
    };

    const limitation = (text) => { 
        if (text.length > 120) {
            let newText = text.substring(0, 120) + '...';
            return newText;
        } else {
            return text;
        }
     }

     useEffect(() => {
        getShows();
     }, []);




    return(
        <Box className={classes.container} >
            <Typography variant="h6" color="primary" className={classes.headingText}>
                Les séries à decouvrir
            </Typography>
                {error && <Alert severity="error"className={classes.smallAlert} id="top" ><Typography>{error}</Typography></Alert>}
                <Box className={classes.flexContainer}>
                    {shows.map((show, index) => {
                        return (
                          <Card key={index} className={classes.card}>
                            <CardContent>
                              <CardMedia
                                className={classes.cardImg}
                                image={show.images.show}
                              />
                              <Typography
                                variant="h6"
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
                                {limitation(show.description)}
                              </Typography>
                            </CardContent>
                            <CardActions className={classes.alignButton}>
                              <Button
                                size="small"
                                color="primary"
                                href={`/series/${show.id}`}
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
                            </CardActions>
                          </Card>
                        );
                    })}
                </Box>
        </Box>
    )
 }

 export default DiscoverGrid;