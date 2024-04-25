import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'; 
import {Home} from './AdminPages/Home/Home';
import AdminProfile from './AdminPages/AdminProfile/AdminProfile';
import PostVehicle from './AdminPages/PostVehicle/PostVehicle';
import ManageBooking from './AdminPages/ManageBooking/ManageBooking';
import ManageContactUs from './AdminPages/ManageContactUs/ManageContactUs';
import RegisterUsers from './AdminPages/RegisteredUsers/RegisterUsers';
import ReviewAndRating from './AdminPages/Booking/Booking';
import BookingPage from './AdminPages/Booking/Booking';


function App() {
  return (
    
      <div>
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/AdminProfile" element={<AdminProfile/>} />
          <Route path="/PostVehicle" element={<PostVehicle/>} />
          <Route path="/ManageBooking" element={<ManageBooking/>} />
          <Route path="/ManageContactUs" element={<ManageContactUs/>} />
          <Route path='/RegisteredUsers' element={<RegisterUsers/>}/>
          <Route path='/ReviewRatings' element= {<ReviewAndRating/>}/>
          <Route path='/Booking' element= {<BookingPage/>}/>
          </Routes>
          </Router>
      </div>
  );
}

export default App;
