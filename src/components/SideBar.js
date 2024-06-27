import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import UsersIcon from "@mui/icons-material/People";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FraccPage from "../pages/FraccPage";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const SideBar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    // <div style={{ height: 64 }}>
    <div style={{ p: 4 }}>
      <Divider />
      <List>
        <ListItem component="a" href="/home" disablePadding>
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
        <ListItem component="a" href="/getusers" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UsersIcon />
            </ListItemIcon>

            <ListItemText primary="Ver Usuarios" />
          </ListItemButton>
        </ListItem>
        <ListItem component="a" href="/map" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UsersIcon />
            </ListItemIcon>

            <ListItemText primary="Mapa" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="Left"
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default SideBar;
