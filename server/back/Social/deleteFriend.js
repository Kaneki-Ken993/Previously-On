import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();
router.delete("/", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;

  let apiUrl = `https://api.betaseries.com/friends/friend`;
  let token = req.body.token;
  let userId = req.body.id;
  let data = {
    id: userId,
    Token: token,
  };

  await axios.delete(apiUrl, data, { headers: { Authorization: token, "X-BetaSeries-Key": apiKey, } })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      return res.status(401).json(error.response);
    });
});


export default router;
