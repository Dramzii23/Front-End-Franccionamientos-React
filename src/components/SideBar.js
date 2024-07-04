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
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

import FraccPage from "../pages/FraccPage";
import { Link as RouterLink } from "react-router-dom";

// Declare page components for each nav item
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import GetUsersPage from "../pages/GetUsersPage";
import MapComponent from "../components/MapComponent";
import Dashboard from "../components/Dashboard";

const drawerWidth = 240;
const navItems = [
  {
    href: "/home",
    icon: <HomeIcon />,
    primary: "Inicio",
    pageComponent: <HomePage />,
  },
  {
    href: "/login",
    icon: <LoginIcon />,
    primary: "Login",
    pageComponent: <LoginPage />,
  },
  {
    href: "/register",
    icon: <AppRegistrationIcon />,
    primary: "Registrar",
    pageComponent: <RegisterPage />,
  },
  {
    href: "/fracc-register",
    icon: <ApartmentIcon />,
    primary: "Registrar Fraccionamiento",
    pageComponent: <FraccPage />,
  },
  {
    href: "/getusers",
    icon: <UsersIcon />,
    primary: "Ver Usuarios",
    pageComponent: <GetUsersPage />,
  },
  {
    href: "/map",
    icon: <MapIcon />,
    primary: "Mapa",
    pageComponent: <MapComponent />,
  },
  {
    href: "/dashboard",
    icon: <DashboardIcon />,
    primary: "Dashboard",
    pageComponent: <Dashboard />,
  },
];

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
        <ListItem component="a" href="/dashboard" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
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
export { navItems };
export default SideBar;
