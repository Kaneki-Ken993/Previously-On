import axios from "axios";

export const episodeNotSeen = (idEpisode) => {
    try {
      axios
        .delete(
          "http://localhost:8000/series/episodes/unfinish",
          {
            id: idEpisode,
            token: localStorage.getItem("token"),
          },
        )
        .then(() => {
            return idEpisode;
        });
    } catch (error) {
      console.log(error.message);
      
    }
};
