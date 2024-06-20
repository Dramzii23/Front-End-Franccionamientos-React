import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import SideBar from "../components/SideBar";

// import { toggleDrawer } from "../components/AppBar";
const MainPage = () => {
  return (
    <Box sx={{ m: 1 }}>
      {/* <Box component="nav" sx={{ width: "10em" }}>
        <SideBar />
      </Box> */}

      <Box component="main" sx={{ m: "1em auto", maxWidth: "600px" }}>
        <AppBarComponent sx={{}} />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1">Inicio H1</Typography>
        <Typography variant="h2">Inicio H2</Typography>
        <Typography variant="h3">Inicio H3</Typography>
        <Typography variant="h4">Inicio H4</Typography>
        <Typography variant="h5">Inicio H5</Typography>
        <Typography variant="h6">Inicio H6</Typography>

        <Typography variant="subtitle1">Subtitulo 1</Typography>
        <Typography variant="subtitle2">Subtitulo 2</Typography>

        {/* Parrafo de relleno para  probar body1 */}

        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </Typography>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </Typography>
        <Typography variant="caption">Pie de pagina</Typography>
        <br />
        <Typography variant="overline">Overline</Typography>
        <br />
        <Typography variant="button">Boton</Typography>
        <br />
        <Typography variant="srOnly">srOnly</Typography>
        <br />
        <Typography variant="inherit">inherit</Typography>
      </Box>
    </Box>
  );
};

export default MainPage;
