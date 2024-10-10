import axios from "axios";

export const SeasonUnFinished = (seasonId, seriesId) => {
  let apiUrl = "http://localhost:8000/series/season/unfinish";
  let token = localStorage.getItem("token");
  // let seriesId = episodes.id;
  let season = seasonId + 1;
  let data = {
    id: seriesId,
    season: season,
    token: token,
  };
  axios
    .delete(apiUrl, { data })
    .then((response) => {
      window.location.reload(false);
    });
};
