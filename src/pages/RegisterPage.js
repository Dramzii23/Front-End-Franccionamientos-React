import React from "react";
import RegisterForm from "../components/RegisterForm";
import SideBar from "../components/SideBar";
import AppBarComponent from "../components/AppBar";

import { Box } from "@mui/material";

const RegisterPage = () => {
  return (
    <Box sx={{ m: 1 }}>
      <Box component="main" sx={{}}>
        <AppBarComponent sx={{}} />
      </Box>

      <Box
        component="main"
        sx={{ flexgrow: 1, p: 3, m: "1em auto", maxWidth: "600px" }}
      >
        <RegisterForm navigateTo="/login" />
      </Box>
    </Box>
  );
};

export default RegisterPage;
