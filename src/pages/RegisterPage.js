import React from "react";
import RegisterForm from "../components/RegisterForm";
import SideBar from "../components/SideBar";
import AppBarComponent from "../components/AppBar";

import { Box, Grid } from "@mui/material";

const RegisterPage = () => {
  return (
    <Grid container xs={12} md={12} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Box sx={{}}>
          {/* <Box component="main" sx={{}}>
          <AppBarComponent sx={{}} />
        </Box> */}

          <Box component="main" sx={{ flexgrow: 1 }}>
            <RegisterForm navigateTo="/login" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
