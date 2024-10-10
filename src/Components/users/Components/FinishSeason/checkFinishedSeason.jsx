import React from "react";
import { Button, Typography } from "@mui/material";
import { SeasonFinished } from "./SeasonFinished";
import { SeasonUnFinished } from "./SeasonUnfinished";

export const checkFinishedSeason = (tableau, key, seriesId) => {
  let saisonFinish = false;
  let test = tableau[key].length - 1;

  for (let index = 0; index <= test; index++) {
    const result = tableau[key][index].user.seen;
    if (result === false) {
      break;
    }
    if (index === test) {
      saisonFinish = true;
    }
  }
  if (saisonFinish === true) {
    return (
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          SeasonUnFinished(key, seriesId);
        }}
      >
        <Typography variant="body1" >
          Marquer comme non terminé
        </Typography>
      </Button>
    );
  } else {
    return (
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          SeasonFinished(key, seriesId);
        }}
      >
        Marquer comme terminé
      </Button>
    );
  }
};
