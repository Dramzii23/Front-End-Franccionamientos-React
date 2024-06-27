import React from "react";
import LoginForm from "../components/LoginForm";
import SideBar from "../components/SideBar";
import AppBarComponent from "../components/AppBar";

import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Box sx={{ m: 1 }}>
      {/* <Box component="main" sx={{}}>
        <AppBarComponent sx={{}} />
      </Box> */}
      <Box
        component="main"
        sx={{ flexgrow: 1, p: 3, m: "1em auto", maxWidth: "700px" }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
