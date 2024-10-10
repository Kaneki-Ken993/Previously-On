import axios from "axios";

export const getEpisodeList = async (seriesId) => {
  let token = localStorage.getItem("token");
  let apiUrl = `http://localhost:8000/series/episodes/${token}/${seriesId}`;
  const API_KEY = process.env.API_KEY;

  let result = await axios.get(apiUrl, {
    headers: {
      Authorization: localStorage.getItem("token"),
      "X-BetaSeries-Key": API_KEY,
    },
  });
  return result.data;
};
