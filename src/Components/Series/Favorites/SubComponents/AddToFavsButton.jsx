import React from "react";

import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";

const AddToFavsButton = ({ id }) => {
  const addToFavs = (id) => {
    let apiUrl = `http://localhost:8000/favorites/add`;
    let token = localStorage.getItem("token");
     axios
       .post(apiUrl, { id: id, token: token })
       .then(() => {
         window.location.reload(false);
       })
       .catch((err) => {
         console.log(err.response);
       });

  };

  return (
    <Checkbox
      icon={<FavoriteBorder color="primary" />}
      checkedIcon={<Favorite color="primary" />}
      onClick={() => {
        addToFavs(id);
      }}
    />
  );
};

export default AddToFavsButton;
