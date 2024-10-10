import express from "express";
import axios from "axios";
import md5 from "md5";
import "dotenv/config";
const router = express.Router();


const apiKey = process.env.REACT_APP_API_KEY;
router.post("/", async (req, res) => {
  const apiUrl = "https://api.betaseries.com/members/auth";

  const { email, password } = req.body;
  const hashedPassword = md5(password);

  const data = {
    login: email,
    password: hashedPassword,
  };

  try {
    await axios.post(apiUrl, data, {
      headers: {
        "X-BetaSeries-Key": apiKey,
      },
    });
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(401).json(error.response.data.errors);
  }
});

export default router;