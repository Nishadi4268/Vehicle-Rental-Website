import React, { useState } from 'react';
import './ManageBooking.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import Dashboard from '../Components/DashBoard/Dashboard.jsx';
import BookingDetails from './BookingDetails.jsx'; // Import the BookingDetails component

const ManageBooking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookings, setBookings] = useState([
    { id: 1, vehicle: 'Vehicle 1', status: 'Booked', bookingInfo: { fullName: 'John Doe', email: 'john@example.com', nic: '123456789', driverAge: 30, licenceNo: 'ABC123' } },
    { id: 2, vehicle: 'Vehicle 2', status: 'Available', bookingInfo: null },
    { id: 3, vehicle: 'Vehicle 3', status: 'Booked', bookingInfo: { fullName: 'Jane Smith', email: 'jane@example.com', nic: '987654321', driverAge: 25, licenceNo: 'XYZ789' } },
    // Add more bookings as needed
  ]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Implement search functionality here
  };

  const handleBookingClick = (bookingId) => {
    const booking = bookings.find(booking => booking.id === bookingId);
    setSelectedBooking(booking);
  };

  const handleCloseBookingDetails = () => {
    setSelectedBooking(null);
  };

  return (
    <div>
      <NavigationBar />
      <Dashboard />
      <div className="manage-booking-page">
        <h2>Manage Booking</h2>
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        {/* Booking table */}
        <table>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Booking Status</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.vehicle}</td>
                <td>
                  {booking.status === 'Booked' ? (
                    <>
                      Booked
                      <button onClick={() => handleBookingClick(booking.id)}>View Details</button>
                    </>
                  ) : (
                    booking.status
                  )}
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Booking details modal */}
        {selectedBooking && selectedBooking.bookingInfo && (
          <BookingDetails booking={selectedBooking} onClose={handleCloseBookingDetails} />
        )}
      </div>
    </div>
  );
}

export default ManageBooking;
