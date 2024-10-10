import axios from "axios";
import express from "express";
import "dotenv/config";
const router = express.Router();



router.delete("/:token/:id", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = `https://api.betaseries.com/shows/favorite`;

  let token = req.params.token;
  let id = req.params.id;
  const params = {
    id: id,
    Token: token,
    token: token,
    key: apiKey,
  }

  await axios.delete(apiUrl, {params})
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      return res.status(401).json(error.response.data.errors);
    });
});


export default router;
