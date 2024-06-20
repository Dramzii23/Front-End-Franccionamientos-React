import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";

import CreateFraccForm from "../components/CreateFraccForm";

// import { toggleDrawer } from "../components/AppBar";
const FraccPage = () => {
  return (
    <Box sx={{ m: 1 }}>
      <Box component="main" sx={{}}>
        <AppBarComponent sx={{}} />
      </Box>
      <Box
        component="main"
        sx={{ flexgrow: 1, p: 3, m: "1em auto", maxWidth: "600px" }}
      >
        <CreateFraccForm sx={{}} />
      </Box>
    </Box>
  );
};

export default FraccPage;
