
import React from 'react';
import './BookingDetails.css'; // Import CSS file for styling

const BookingDetails = ({ booking, onClose }) => {
  return (
    <div className="booking-details-modal">
      <h3>Booking Information</h3>
      <p><strong>Full Name:</strong> {booking.bookingInfo.fullName}</p>
      <p><strong>Email:</strong> {booking.bookingInfo.email}</p>
      <p><strong>NIC:</strong> {booking.bookingInfo.nic}</p>
      <p><strong>Driver Age:</strong> {booking.bookingInfo.driverAge}</p>
      <p><strong>Licence No:</strong> {booking.bookingInfo.licenceNo}</p>
      <button className="remove-booking-info" onClick={onClose}>Close</button>
    </div>
  );
};

export default BookingDetails;