import React from 'react';
import './RegisteredUsers.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import Dashboard from '../Components/DashBoard/Dashboard.jsx';

const RegisterUsers = () => {
  return (
    <div>
      <NavigationBar />
      <Dashboard />
      <div className="register-users-page">
        <div className="register-users-header">
          <h2>Registered Users</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email/Contact No</th>
              <th>NIC No</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows will be added dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisterUsers;
