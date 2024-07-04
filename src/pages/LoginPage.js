import React from "react";
import LoginForm from "../components/LoginForm";
import SideBar from "../components/SideBar";
import AppBarComponent from "../components/AppBar";

import { Box, Grid } from "@mui/material";

const LoginPage = () => {
  return (
    <Grid container xs={12} md={12} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Box sx={{}}>
          {/* <Box component="main" sx={{}}>
          <AppBarComponent sx={{}} />
        </Box> */}
          <Box
            component="main"
            // sx={{ flexgrow: 1, p: 3, m: "1em auto", maxWidth: "700px" }}
            sx={{ flexgrow: 1 }}
          >
            <LoginForm />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
