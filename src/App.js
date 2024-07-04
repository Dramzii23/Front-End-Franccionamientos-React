import MainPage from "./pages/MainPage";
import FraccPage from "./pages/FraccPage";
import GetUsersPage from "./pages/GetUsersPage";
import React, { useState } from "react";
import AppBarComponent from "./components/AppBar";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { AppBar } from "@mui/material";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import MapComponent from "./components/MapComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import FlexboxDemo from "./components/FlexboxDemo";
import GridComponent from "./components/GridComponent";
import Dashboard from "./components/Dashboard";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{}}>
        <CssBaseline />
        {/* <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        /> */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px}` } }}
        >
          {/* <Toolbar /> */}

          <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/grid" element={<GridComponent />} />
            <Route path="/flexboxdemo" element={<FlexboxDemo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/fracc-register" element={<FraccPage />} />
            <Route path="/getusers" element={<GetUsersPage />} />

            <Route
              path="/map"
              element={<ProtectedRoute element={<MapComponent />} />}
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
