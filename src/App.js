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

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import FraccPage from "./pages/FraccPage";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Appbar />
//       <Sidebar />
//     </div>
//   );
// }
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/fracc-register" element={<FraccPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
