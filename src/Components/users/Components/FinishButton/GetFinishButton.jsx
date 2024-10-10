import React from "react";
import _ from "lodash";
import { Button } from "@mui/material";
import { episodeSeen } from "../episodeSeen";
import { episodeNotSeen } from "../episodeNotSeen";

const ButtonFinish = ({
  setSortList,
  tableau,
  idEpisode,
  seriesId,
  getRefresh,
  setRefresh,
}) => {
  let obj = _.filter(tableau, { id: idEpisode });
  if (obj.length > 0) {
    if (obj[0].user.seen === true) {
      return (
        <Button
          variant="contained"
          onClick={async (e) => {
            e.preventDefault();
            episodeNotSeen(idEpisode);
            window.location.reload(false);
          }}
        >
          Vu
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          onClick={async (e) => {
            e.preventDefault();
            episodeSeen(idEpisode);
            window.location.reload(false);
          }}
        >
          Non vu
        </Button>
      );
    }
  }
};

export default ButtonFinish;
