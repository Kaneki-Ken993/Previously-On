import axios from "axios";
import express from "express";
import _ from "lodash";
import "dotenv/config";
const router = express.Router();

router.get("/:token/:id", async (req, res) => {
  let apiKey = process.env.REACT_APP_API_KEY;
  let token = req.params.token;
  let seriesId = req.params.id;
  let params = { id: seriesId, token: token, key: apiKey };
  let apiUrl = `https://api.betaseries.com/shows/episodes`;

  try {
    await axios
      .get(apiUrl, { params })
      .then((response) => {
        let array = response.data.episodes;
        let newArray = [];
        if (array.length > 0) {
          let maxSeason = _.maxBy(array, "season").season;
          for (let i = 1; i <= maxSeason; i++) {
            let filteredArray = _.filter(array, { season: i });
            newArray.push(filteredArray);
          }
        }
        res.status(200).json(newArray);
      });
  } catch (error) {
    return res.status(401).json(error.response.data.errors);
  }
});

export default router;
