import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import AppBarComponent from "./AppBar";

const AppBarComponent = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">FRACCIONAMIENTOS 01</Typography>
        <Button color="inherit" style={{ marginLeft: "auto" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
