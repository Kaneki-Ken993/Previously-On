import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.get("/:token", async (req, res) => {
  const params = {
    token: req.params.token,
    key: process.env.REACT_APP_API_KEY,
  }
  try {
    await axios.get("https://api.betaseries.com/shows/member", {params})
    .then((response) => {
      return res.status(200).json(response.data);
    })
  } catch (error) {
    return res.status(401).json(error.response);
  }
});


export default router;
