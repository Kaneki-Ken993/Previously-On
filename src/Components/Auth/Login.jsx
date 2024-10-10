import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import { useStyles } from "../Styles/Style";
import { Box, TextField, Typography, Button, Alert } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();


    var hashedPassword = md5(password);
    const apiKey = import.meta.env.API_KEY;

    let data = {
      login: email,
      password: hashedPassword,
    };

    try {
      await axios
        .post("https://api.betaseries.com/members/auth", data, {
          headers: {
            "X-BetaSeries-Key": API_KEY,
          },
        })
        .then((response) => {
          setErrors([]);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("Login", response.data.user.login);
          localStorage.setItem("Id", response.data.user.id);
          navigate("/accueil");
        })
        .catch((err) => {
          setErrors(err.response.data.errors);
          console.log(err.response.data.errors);
        });

    } catch (error) {
      setErrors(error.response.data);
      console.log(error);
      return res.status(401).json(error.response.data);
      
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/accueil");
  }, [navigate]);

  return (
    <Box className={classes.loginForm}>
      <Typography variant="h6" color="primary" className={classes.headingText}>
        Se connecter
      </Typography>
      <Box className={classes.subContainer}>
        {errors.map((error, index) => (
          <Alert className={classes.smallAlert} key={index} severity="error">
            <Typography variant="h6" color="primary" className={classes.text}>
              {error.text}
            </Typography>
          </Alert>
        ))}
      </Box>
      <form onSubmit={handleLogin} className={classes.subContainer}>
        <TextField
          variant="outlined"
          className={classes.input}
          required
          fullWidth
          color="primary"
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="Adresse mail"
        />
        <TextField
          variant="outlined"
          className={classes.input}
          required
          fullWidth
          color="primary"
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Mot de passe"
        />
        <Button type="submit" fullWidth className={classes.bigButton}>
          <Typography variant="body1" color="primary" className={classes.text}>
            Connexion
          </Typography>
        </Button>
      </form>
    </Box>
  );
};

export default Login;
