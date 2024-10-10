import axios from "axios";
import express from "express";
const router = express.Router();
import "dotenv/config";



router.get("/:id", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = "https://api.betaseries.com/shows/favorites";
  
  
  let id = req.params.id;
  const param = {
    id: id,
    summary: true,
  }
  const headers = {
    "X-BetaSeries-Key": apiKey,
  };

  
await axios({
  method: "get",
  url: apiUrl,
  data: {
    id: id,
    summary: true,
  },
  headers: {
    "X-BetaSeries-Key": apiKey,
    "X-BetaSeries-Version": "3.0",
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
