import axios from "axios";

export const episodeSeen = (idEpisode) => {
  axios.post("http://localhost:8000/series/episodes/finish", {
    id: idEpisode,
    token: localStorage.getItem("token"),
  }).then(() => {
    return idEpisode;
  });
};
