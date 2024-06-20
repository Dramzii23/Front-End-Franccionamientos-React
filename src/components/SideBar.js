import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FraccPage from "../pages/FraccPage";

const SideBar = () => {
  return (
    <Drawer variant="permanent" anchor="Right">
      <List>
        <ListItem component="a" href="/" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>
        <ListItem component="a" href="/login" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>

        <ListItem component="a" href="/register" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>

            <ListItemText primary="Registrar" />
          </ListItemButton>
        </ListItem>
        <ListItem component="a" href="/fracc-register" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>

            <ListItemText primary="Registrar Fraccionamiento" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
