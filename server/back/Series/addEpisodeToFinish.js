import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();

router.post("/", async (req, res) => {

  let apiUrl = "https://api.betaseries.com/episodes/watched";
  let token = req.body.token;
  let showId = req.body.id;
  let params = {
    id: showId,
    Token: token,
    token: token,
    key: process.env.REACT_APP_API_KEY,
  };

  try {
    await axios.post(apiUrl, {params})
    .then(response =>{
      return res.status(200).json(response.data);
    });
  } catch (error) {
    return res.status(401).json(error.response.data.errors);
  }
});


export default router;
