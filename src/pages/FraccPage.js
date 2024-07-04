import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";

import CreateFraccForm from "../components/CreateFraccForm";

// import { toggleDrawer } from "../components/AppBar";
const FraccPage = () => {
  return (
    <Grid container xs={12} md={12} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Box sx={{}}>
          {/* <Box component="main" sx={{}}>
            <AppBarComponent sx={{}} />
          </Box> */}
          <Box component="main" sx={{ flexgrow: 1 }}>
            <CreateFraccForm sx={{}} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FraccPage;
