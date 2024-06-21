import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login/Login.js';
import SignUp from './Pages/SignUp/SignUp.js';
import UserProfile from './Pages/UserPart/UserProfile/UserProfile.js';
import UserBookings from './Pages/UserPart/UserBookings/UserBookings.js';
import ForgotPW from './Pages/FogotPW/ForgotPW.js';
import VehicleDetails from './Pages/VehicleDetails/VehicleDetails.js';
<<<<<<< HEAD
=======
import PackageOffer from './Pages/PackageOffer/PackageOffer.js';
import About from './Pages/AboutUs/About.js';
>>>>>>> 2ff9e0e10789f96ccef38f52163fdc9e03b82908


import {Home} from './Pages/Home/Home.js';
import AdminProfile from './AdminPages/AdminProfile/AdminProfile';
import PostVehicle from './AdminPages/PostVehicle/PostVehicle';
import ManageBooking from './AdminPages/ManageBooking/ManageBooking';
import ManageContactUs from './AdminPages/ManageContactUs/ManageContactUs';
import RegisterUsers from './AdminPages/RegisteredUsers/RegisterUsers';
<<<<<<< HEAD
import ReviewAndRating from './AdminPages/Booking/Booking';
import BookingPage from './AdminPages/Booking/Booking';
=======
import ReviewAndRating from './AdminPages/ReviewRatings/ReviewRatings.jsx';
import Booking from './AdminPages/Booking/Booking.jsx';
>>>>>>> 2ff9e0e10789f96ccef38f52163fdc9e03b82908


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
<<<<<<< HEAD
=======
          <Route path="/PackageOffer" element={<PackageOffer/>} />
          <Route path="/About" element={<About/>} />
>>>>>>> 2ff9e0e10789f96ccef38f52163fdc9e03b82908


          <Route path="/AdminProfile" element={<AdminProfile/>} />
          <Route path="/PostVehicle" element={<PostVehicle/>} />
          <Route path="/ManageBooking" element={<ManageBooking/>} />
          <Route path="/ManageContactUs" element={<ManageContactUs/>} />
          <Route path='/RegisteredUsers' element={<RegisterUsers/>}/>
          <Route path='/ReviewRatings' element= {<ReviewAndRating/>}/>
<<<<<<< HEAD
          <Route path='/Booking' element= {<BookingPage/>}/>
=======
          <Route path='/Booking' element= {<Booking/>}/>
>>>>>>> 2ff9e0e10789f96ccef38f52163fdc9e03b82908
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
