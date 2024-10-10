import React, { useState } from "react";
import axios from "axios";

import { useStyles } from "../../Styles/Style";
import { IsLoggedIn } from "../../Auth/IsLoggedIn";
import NotLoggedIn from "../../Auth/NotLoggedIn";
import MembersResult from "./MembersResult";

/**
 * Material-UI imports
 */
import {
Box,
TextField,
Typography,
Button,
Alert,
} from "@mui/material";

const SearchMembers = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoggedIn] = useState(IsLoggedIn());
  const classes = useStyles();
  const API_KEY = import.meta.env.API_KEY;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let research = "%" + search + "%";
    const apiKey = import.meta.env.API_KEY || API_KEY;
    let apiURL = `https://api.betaseries.com/members/search?login=${research}`;
    let headers = {
      Authorization: localStorage.getItem("token"),
      "X-BetaSeries-Key": apiKey,
      "X-BetaSeries-Version": "3.0",
    };

     await axios.get(apiURL, {
       headers: {
         Authorization: localStorage.getItem("token"),
         "X-BetaSeries-Key": apiKey,
         "X-BetaSeries-Version": "3.0",
       },
     })
       .then((response) => {
         setUsers(response.data.users);
         setSuccess("ok");
       })
       .catch((error) => {
         setError(error.response.data);
       });
  };

  return isLoggedIn ? (
    <Box className={classes.container}>
      <Typography variant="h6" color="primary" className={classes.headingText}>
        Rechercher un membre
      </Typography>
      <form onSubmit={handleSubmit} className={classes.subContainer}>
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
        <TextField
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.input}
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Rechercher un membre"
        />
        <Button type="submit" className={classes.bigButton}>
          <Typography variant="body1" color="primary" className={classes.text}>
            Rechercher
          </Typography>
        </Button>
      </form>
      <Box className={classes.container}>
        {success && <MembersResult users={users} />}
      </Box>
    </Box>
  ) : (
    <NotLoggedIn />
  );
};

export default SearchMembers;
