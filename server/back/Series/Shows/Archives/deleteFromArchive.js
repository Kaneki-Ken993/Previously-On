import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();


router.delete("/", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = "https://api.betaseries.com/shows/archive";

  let showId = req.body.id;
  let token = req.body.token;
  
  let params = {
    id: showId,
    token: token,
    key: apiKey,
  };
  const headers = {
    Authorization: token,
    "X-BetaSeries-Key": apiKey,
  }

  

  await axios.delete(apiUrl, { params }, { headers })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
      return res.status(401).json(error.response.data);
    });
});

export default router;
