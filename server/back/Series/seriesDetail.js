import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.get("/:id/", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let seriesId = req.params.id;
  let apiUrl = `https://api.betaseries.com/shows/display`;
  const params = {
    id: seriesId,
    key: apiKey,
    summary:true,
  };

  try {
    await axios.get(apiUrl, { params })
    .then((response) => {
      res.status(200).json(response.data);
      
    });
  } catch (error) {
    console.error("Error fetching data from BetaSeries API:", error.response);
    res.status(401).json(error.response);
  }
});

export default router;
