import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.delete("/", async (req, res) => {
  let apiUrl = "https://api.betaseries.com/seasons/watched";
  let token = req.body.token;
  let seriesId = req.body.id;
  let seasonId = req.body.season;
  let apiKey = process.env.REACT_APP_API_KEY;
  
  const headers = {
    "X-BetaSeries-Key": apiKey,
  };
  const params = { id: seriesId, season: seasonId, token: token, key: apiKey };
  
  try {
    await axios.delete(apiUrl, { params }, { headers })
  .then((response) => { 
    return res.status(200).json(response.data);
  })
  } catch (error) {
    console.log(error.response.data);
    return res.status(401).json(error.response.data.errors);
  }
});

export default router;
