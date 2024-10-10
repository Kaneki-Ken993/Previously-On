import React from "react";
import Navbar from "./Navbar";
import SmallNavbar from "./SmallNavbar";
import { Box } from "@mui/material";

const NavScreen = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Navbar />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SmallNavbar />
      </Box>
    </Box>
  );
};

export default NavScreen;