import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";

// import { toggleDrawer } from "../components/AppBar";
const MainPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBarComponent />
      <SideBar />
      <Typography variant="h3" gutterBottom>
        Bienvenido
      </Typography>
    </Box>
  );
  // return (
  //   <Box sx={{ m: 1 }}>
  //     {/* <Box component="nav" sx={{ width: "10em" }}>
  //       <SideBar />
  //     </Box> */}

  //     <Box component="main" sx={{}}>
  //       <AppBarComponent sx={{}} />
  //     </Box>
  //     <Box
  //       fullWidth
  //       sx={{ flexgrow: 1, p: 3, m: "1em auto", maxWidth: "1000px" }}
  //     >
  //       <Typography variant="h3">Bienvenido</Typography>

  //       <Typography variant="body1" sx={{ m: 2 }}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
  //         risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
  //         ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
  //         massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
  //         nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
  //         sit amet erat.
  //       </Typography>
  //     </Box>
  //   </Box>
  // );
};

export default MainPage;
