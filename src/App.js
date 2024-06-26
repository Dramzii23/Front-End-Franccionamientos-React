// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";

// import logo from "./logo.svg";

// // function App() {
// //   return (
// //     <div className="App">
// //       <AppBarComponent />
// //       <SideBar />
// //       <LoginForm />
// //     </div>
// //   );

// // }

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
// import HomePage from "./pages/HomePage";
import FraccPage from "./pages/FraccPage";
import GetUsersPage from "./pages/GetUsersPage";
// import { Box } from "@mui/material";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Appbar />
//       <Sidebar />
//     </div>
//   );
// }
import React, { useState } from "react";
import AppBarComponent from "./components/AppBar";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
// import FracPage from "./pages/FracPage";
import { AppBar } from "@mui/material";
import { CssBaseline, Box, Toolbar } from "@mui/material";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px}` } }}
        >
          <Toolbar />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/fracc-register" element={<FraccPage />} />
            <Route path="/getusers" element={<GetUsersPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
