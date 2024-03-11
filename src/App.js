import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from "./Pages/Home/Home.js";
import Login from './Pages/Login/Login.js';
import SignUp from './Pages/SignUp/SignUp.js';
import UDashboard from './Components/UserDashboard/UDashboard.js';
import AdminProfile from './Pages/AdminPart/Profile/AdminProfile.js';
import ForgotPW from './Pages/FogotPW/ForgotPW.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/fogotpassword" element={<ForgotPW/>} />
          <Route path="/userdashboard" element={<UDashboard/>} />
          <Route path="/fogotpassword" element={<ForgotPW/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
