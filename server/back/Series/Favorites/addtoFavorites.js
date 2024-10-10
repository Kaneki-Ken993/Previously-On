import axios from "axios";
import express from "express";
const router = express.Router();
import "dotenv/config";



router.post("/", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = "https://api.betaseries.com/shows/favorite";

  let id = req.body.id;
  let token = req.body.token;
  
  const params = {
    id: id,
    Token: token,
  }
  
  const headers = {
    "Authorization": token,
    "X-BetaSeries-Key": apiKey,
  };

 await axios({
   method: "post",
   url: apiUrl,
   data: {
     id: id,
     Token: token,
   },
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
