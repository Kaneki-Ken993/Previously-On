import React from "react";

import CheckBox from "@mui/icons-material/CheckBox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

const DeleteFromFavsButton = ({ id }) => {
  const deleteFromFavs = (id) => {
    let token = localStorage.getItem("token");
    let apiUrl = `http://localhost:8000/favorites/delete/${token}/${id}`;

     axios
       .delete(apiUrl)
       .then(() => {
         window.location.reload(false);
       })
       .catch((err) => {
         console.log(err.response);
       });
  };

  return (
    <CheckBox
      icon={<Favorite color="primary" />}
      checkedIcon={<FavoriteBorder color="primary" />}
      onClick={() => {
        deleteFromFavs(id);
      }}
    />
  );
};

export default DeleteFromFavsButton;
