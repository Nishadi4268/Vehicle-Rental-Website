import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login/Login.js';
import SignUp from './Pages/SignUp/SignUp.js';
import UserProfile from './Pages/UserPart/UserProfile/UserProfile.js';
import UserBookings from './Pages/UserPart/UserBookings/UserBookings.js';
import ForgotPW from './Pages/FogotPW/ForgotPW.js';
import VehicleDetails from './Pages/VehicleDetails/VehicleDetails.js';


import {Home} from './Pages/Home/Home.js';
import AdminProfile from './AdminPages/AdminProfile/AdminProfile';
import PostVehicle from './AdminPages/PostVehicle/PostVehicle';
import ManageBooking from './AdminPages/ManageBooking/ManageBooking';
import ManageContactUs from './AdminPages/ManageContactUs/ManageContactUs';
import RegisterUsers from './AdminPages/RegisteredUsers/RegisterUsers';
import ReviewAndRating from './AdminPages/Booking/Booking';
import BookingPage from './AdminPages/Booking/Booking';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/fogotpassword" element={<ForgotPW/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/UserBookings" element={<UserBookings/>} />
          <Route path="/Vehicles" element={<VehicleDetails/>} />


          <Route path="/AdminProfile" element={<AdminProfile/>} />
          <Route path="/PostVehicle" element={<PostVehicle/>} />
          <Route path="/ManageBooking" element={<ManageBooking/>} />
          <Route path="/ManageContactUs" element={<ManageContactUs/>} />
          <Route path='/RegisteredUsers' element={<RegisterUsers/>}/>
          <Route path='/ReviewRatings' element= {<ReviewAndRating/>}/>
          <Route path='/Booking' element= {<BookingPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
