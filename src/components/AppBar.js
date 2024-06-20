// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";

// const AppBarComponent = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">FRACCIONAMIENTOS</Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default AppBarComponent;

///BEGINNING OF THE APPBAR COMPONENT TEST

import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const AppBarComponent = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
      >
        <SideBar />
      </Drawer>
      <AppBar position="static" sx={{ borderRadius: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FRACCIONAMIENTOS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
