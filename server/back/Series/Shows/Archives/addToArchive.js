import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();


router.post("/", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = "https://api.betaseries.com/shows/archive";

  let showId = req.body.id;
  let token = req.body.token;

  let params = {
    id: showId,
  };

  await axios.post(apiUrl, params, {
    headers: {
      Authorization: token,
      "X-BetaSeries-Key": apiKey,
    },
  })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      return res.status(401).json(error.response.data.errors);
    });
});


export default router;
