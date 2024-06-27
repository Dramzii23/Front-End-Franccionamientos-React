import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";
import { Link as RouterLink } from "react-router-dom";
import GetUsers from "../components/GetUsers";

// import { toggleDrawer } from "../components/AppBar";
const GetUsersPage = () => {
  return (
    <Box sx={{ m: 1 }}>
      {/* <Box component="main" sx={{}}>
        <AppBarComponent sx={{}} />
      </Box> */}
      <Box sx={{ m: "1em auto", maxWidth: "600px" }}>
        <Typography variant="body2">
          <GetUsers />
        </Typography>
      </Box>
    </Box>
  );
};

export default GetUsersPage;
