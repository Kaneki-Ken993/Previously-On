import axios from "axios";
import express from 'express';
import 'dotenv/config';
const router = express.Router();
router.get('/:token', async (req, res) => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = "https://api.betaseries.com/friends/list";
    let token = req.params.token;

    await axios.get(apiUrl, {
      headers: {
        Authorization: token,
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
