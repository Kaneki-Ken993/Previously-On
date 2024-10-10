import axios from "axios";

export const SeasonFinished = (seasonId, seriesId) => {
  let apiUrl = "http://localhost:8000/series/season/finish";
  let token = localStorage.getItem("token");
  let season = seasonId + 1;

  axios
    .post(apiUrl, {
      id: seriesId,
      token: token,
      saison: season,
    })
    .then((response) => {
      window.location.reload(false);
    });
};
