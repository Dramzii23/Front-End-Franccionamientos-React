import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Block,
  HorizontalRule,
} from "@mui/material";

// import { } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import UsersIcon from "@mui/icons-material/People";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WidgetsIcon from "@mui/icons-material/Widgets";
import WidgetIcon from "@mui/icons-material/Widgets";

import { navItems } from "./SideBar";
import SideBar from "./SideBar";
import AppBarComponent from "./AppBar";
import FraccPage from "../pages/FraccPage";
import { Link as RouterLink } from "react-router-dom";
import GetUsers from "../pages/GetUsersPage";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/HomePage";
import { Widgets } from "@mui/icons-material";

const caja3Items = [
  {
    id: 1,
    widgetName: "Widget " + 1,
  },
  {
    id: 2,
    widgetName: "Widget " + 2,
  },
  {
    id: 3,
    widgetName: "Widget " + 3,
  },
  {
    id: 4,
    widgetName: "Widget " + 4,
  },
  {
    id: 5,
    widgetName: "Widget " + 5,
  },
];

const footerItems = [
  {
    id: 1,
    footerColumn: "Column 1",
  },
  {
    id: 2,
    footerColumn: "Column 2",
  },
  {
    id: 3,
    footerColumn: "Column 3",
  },
  {
    id: 4,
    footerColumn: "Column 4",
  },
];

const Dashboard = () => {
  const [Caja1, setCaja1] = useState(HomePage);

  // setCaja1("<MainPage />");

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <AppBarComponent />
        {/* <Box sx={{ bgcolor: "secondary.main" }} xs={12}></Box> */}
      </Grid>

      {/* <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "primary.main" }}>Sidebar</Box>
      </Grid> */}
      <Grid container md={12} sx={{ bgcolor: "white" }}>
        <Grid item xs={12} md={2.5} spacing={1}>
          <Box sx={{}}>
            <Box>
              {/* <Divider /> */}
              <List>
                {navItems.map((item, index) => (
                  <ListItem
                    component="a"
                    href="#"
                    disablePadding
                    onClick={() => setCaja1(item.pageComponent)}
                  >
                    <ListItemButton
                    // onClick={() => setCaja1(item.pageComponent)}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.primary} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={8} sx={{ bgcolor: "whitesmoke", p: 2 }}>
          <Box xs={12}>{Caja1}</Box>
        </Grid>

        <Grid item xs={6} md={1.5} sx={{ bgcolor: "white" }}>
          <Box xs={12} useState={{ m: 0 }}>
            <List sx={{ m: 0, p: 0 }}>
              {caja3Items.map((item, index) => (
                <ListItem
                  // component="a"
                  // href="#"
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "2em" }}>
                      <WidgetIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.widgetName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid
        item
        xs={12}
        md={12}
        sx={{ bgcolor: "secondary.main", height: "5em" }}
      > */}
      <Grid
        container
        xs={12}
        md={12}
        sx={{ bgcolor: "secondary.main", m: 0 }}
        spacing={4}
      >
        {footerItems.map((item, index) => (
          <Grid
            item
            sx={{
              bgcolor: "#00000033",
              // border: 1,
              // borderColor: "white",
              padding: "1em !important",
              color: "white",
              // mr: ".5%",
              mr: `${footerItems.length / 10}%`,
              // width: `${60 / footerItems.length}% !important`,

              // mr: index !== footerItems.length - 1 ? 2 : 0,
            }}
            xs={
              12 / footerItems.length -
              `${footerItems.length / 10 / (footerItems.length * 2)}`
            }
          >
            {item.footerColumn}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Grid>
        ))}
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default Dashboard;
