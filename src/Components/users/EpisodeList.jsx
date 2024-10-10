import React, { useEffect, useState } from "react";
import { getSeriesDetail } from "./Components/getSeriesDetail";
import { getSeriesImages } from "./Components/getSeriesImages";
import { getEpisodeList } from "./Components/getEpisodeList";
import GetFinishButton from "./Components/FinishButton/GetFinishButton";
import { checkFinishedSeason } from "./Components/FinishSeason/checkFinishedSeason";
import { useStyles } from "../Styles/Style";
import _ from "lodash";
import NotLoggedIn from "../Auth/NotLoggedIn";
import { IsLoggedIn } from "../Auth/IsLoggedIn";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

// Material UI
import {
  Grid2,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Backdrop,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStylesBackdrop = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  interieur: {
    width: "50%",
    height: "90%",
    backgroundColor: "grey",
  },
}));

const EpisodeList = () => {
  const { id } = useParams();
  const [isLoggedIn] = useState(IsLoggedIn());
  const seriesId = id;
  const [episodes, setepisodes] = useState([]);
  const [image, setImage] = useState({});
  const [list] = useState([]);
  const [sortList, setSortList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [infoBackdrop, setinfoBackdrop] = useState([]);
  const [open, setOpen] = useState(false);
  const classesBackdrop = useStylesBackdrop();
  const classes = useStyles();

  useEffect(() => {
    async function fetchMyAPI() {
      setSortList(await getEpisodeList(seriesId));
      setImage(await getSeriesImages(seriesId));
      setepisodes(await getSeriesDetail(seriesId));
    }
    fetchMyAPI();
  }, [seriesId]);


  const handleToggle = (tableau, idEpisode) => {
    let obj = _.filter(tableau, { id: idEpisode });
    obj.map((value) => {
      return setinfoBackdrop(value);
    });
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.container}>
      {!isLoggedIn ? (
        <Grid2 lg={12} md={12} sm={12} xs={12}>
          <NotLoggedIn />
        </Grid2>
      ) : (
        <Grid2 lg={12} md={12} sm={12} xs={12}>
          <Box className={classes.container}>
            <Card className={classes.bigCard}>
              <CardContent>
                <img
                  src={image.banner}
                  alt="Episode"
                  className={classes.bigCardImg}
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.headingText}
                >
                  {episodes.title}
                </Typography>
                <Typography variant="body1" color="primary" className={classes.text}>
                  {episodes.seasons} saisons
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.text}
                >
                  {episodes.episodes} episodes
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.text}
                >
                  {episodes.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          {/* separation */}
          <Box className={classes.container}>
            {sortList.map((value, index) => {
              return (
                <Accordion key={index} className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.saisonFini}>
                      <Typography
                        variant="h6"
                        color="primary"
                        className={classes.headingText}
                      >
                        Saison {index + 1}
                      </Typography>
                      {checkFinishedSeason(sortList, index, seriesId)}
                    </div>
                  </AccordionSummary>
                  {value.map((val, ind) => {
                    return (
                      <AccordionDetails key={ind}>
                        <AccordionSummary>
                          <Box className={classes.flexContainer}>
                            <Card className={classes.extraSmallCard}>
                              <CardContent>
                                <Box
                                  className={classes.flexContainer}
                                  onClick={() => {
                                    handleToggle(list, val.id);
                                  }}
                                >
                                  <Typography
                                    variant="body1"
                                    color="primary"
                                    className={classes.text}
                                  >
                                    Episode {val.code}
                                  </Typography>
                                </Box>
                              </CardContent>
                              <CardActions>
                                <Button
                                  variant="contained"
                                  onClick={() => {
                                    handleToggle(sortList[index], val.id);
                                  }}
                                >
                                  <Typography
                                    variant="body1"
                                    className={classes.text}
                                  >
                                    Voir plus
                                  </Typography>
                                </Button>
                                <GetFinishButton
                                  setSortList={setSortList}
                                  tableau={sortList[index]}
                                  idEpisode={val.id}
                                  seriesId={seriesId}
                                  getRefresh={refresh}
                                  setRefresh={setRefresh}
                                />
                                <Backdrop
                                  className={classesBackdrop.backdrop}
                                  open={open}
                                  onClick={handleClose}
                                >
                                  <Card className={classesBackdrop.interieur}>
                                    <CardContent>
                                      <img
                                        src={image.banner}
                                        alt="Episode"
                                        className={classes.bigCardImg}
                                      />
                                      <Typography variant="body1">
                                        {infoBackdrop.title}
                                      </Typography>
                                      <Typography variant="body1">
                                        Premiere diffusion : {infoBackdrop.date}
                                      </Typography>
                                      <Typography variant="body1">
                                        {infoBackdrop.description}
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                </Backdrop>
                              </CardActions>
                            </Card>
                          </Box>
                        </AccordionSummary>
                      </AccordionDetails>
                    );
                  })}
                </Accordion>
              );
            })}
          </Box>
        </Grid2>
      )}
    </Box>
  );
};

export default EpisodeList;
