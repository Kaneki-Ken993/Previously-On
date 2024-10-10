import axios from "axios";

export const getSeriesImages = async (seriesId) => {
  let apiUrl = `http://localhost:8000/series/infos/${seriesId}`;
  let result = await axios.get(apiUrl);
  return result.data.show.images;
};
