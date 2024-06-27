import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";
import MapComponent from "../components/MapComponent";

// import { toggleDrawer } from "../components/AppBar";
const MainPage = () => {
  return (
    <Box sx={{}}>
      {/* <AppBarComponent /> */}
      {/* <SideBar /> */}

      <Typography variant="h3" gutterBottom>
        Bienvenido
      </Typography>
      <MapComponent />
    </Box>
  );
};

export default MainPage;
