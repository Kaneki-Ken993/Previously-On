import React, { useState } from "react";
import axios from "axios";
import { useStyles } from "../Styles/Style";
import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import SearchResult from "./SearchResult";

const SearchShow = () => {
    const [search, setSearch] = useState("");
    const [shows, setShows] = useState([]);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(null);
    const classes = useStyles();


    const handleSearch = (event) => {
        setSearch(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let title = '%'+search+'%';
        let apiUrl = `http://localhost:8000/series/search?title=${title}`

        await axios.get(apiUrl)
            .then((response) => {
                setSuccess(true);
                setShows(response.data.shows);
            })
            .catch((error) => {
                setErrors(error.response.data);
            });
    }


    return (
        <Box className={classes.container}>
            <Typography variant="h6" color="primary" className={classes.headingText}>Rechercher une série</Typography>
            <form onSubmit={handleSubmit} className={classes.subContainer}>
                {
                    errors.map((error, index) => {
                        return (
                            <Alert key={index} severity="error">{error.text}</Alert>
                        )
                    })
                }

                <TextField
                variant="outlined"
                className={classes.input}
                fullWidth
                color="primary"
                value={search}
                onChange={handleSearch}
                type="text"
                placeholder="Rechercher une série..."
                />
                <Button variant="contained" type="submit" className={classes.bigButton}>
                    <Typography variant="body1" className={classes.text}>Rechercher</Typography>
                </Button>
            </form>
            <Box>
                {
                    success && (<SearchResult shows={shows} />)
                }
            </Box>
        </Box>
    )
}



export default SearchShow;