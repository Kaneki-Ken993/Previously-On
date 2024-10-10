import React from "react";
import { Grid2 } from "@mui/material";
import DiscoverGrid from "./DiscoverGrid";
import SearchShow from "./SearchShow";


const Acceuil = () => {
    return (
      <Grid2 container justifyContent={"space-evenly"}>
        <Grid2 lg={12} md={12} sm={12} xs={12} id="top">
          <SearchShow />
        </Grid2>
        <Grid2 lg={12} md={12} sm={12} xs={12}>
          <DiscoverGrid />
        </Grid2>
      </Grid2>
    );
}

export default Acceuil;