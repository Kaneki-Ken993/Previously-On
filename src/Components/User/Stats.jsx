import React from "react";

import { useStyles } from "../Styles/Style";

import { 
TableContainer, 
Table, 
TableHead,
TableBody,
TableRow,
TableCell,
Typography
} from "@mui/material";

const Stats = ({ stats }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Ses amis
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Ses séries
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Episodes vus
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="h6"
                color="primary"
                className={classes.headingText}
              >
                Jour préféré
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {stats.friends}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {stats.shows}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {stats.episodes}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                color="primary"
                className={classes.text}
              >
                {stats.favorite_day}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Stats;
