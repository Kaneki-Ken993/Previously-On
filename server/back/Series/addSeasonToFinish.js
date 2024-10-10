import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.post("/", async (req, res) => {
  let apiUrl = "https://api.betaseries.com/seasons/watched";
  let token = req.body.token;
  let seriesId = req.body.id;
  let seasonId = req.body.saison;
  
  const headers = {
    Authorization: token,
    "X-BetaSeries-Key": process.env.REACT_APP_API_KEY,
  };
  try {
    await axios
      .post(apiUrl, { id: seriesId, season: seasonId }, { headers })
      .then((res) => {
        return res.status(200).json(response.data);
      })
      .catch((err) => {});
  } catch (error) {
    console.error(error.response.data);
    return res.status(401).json(error.response.data.errors);
  }
});

export default router;
