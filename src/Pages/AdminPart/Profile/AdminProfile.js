import React, { useState } from 'react';
import ADashboard from '../../../Components/UserDashboard/UserDashboard'; // Import the ADashboard component
import './AdminProfile.css'; // Import the CSS file for styling

const AdminProfile = () => {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Code to save changes (e.g., API call)
  };

  return (
    <div className="admin-profile">
      <ADashboard />
      <div className="profile-info">
        <div className="gray-tab">Profile Info</div>
        <div className="edit-button">
          <i className="edit-button-img" />
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
        <div className="profile-picture">
        </div>
        <div className="profile-details">
          <div>
            <label>First Name:</label>
            {editing ? <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : <span>{firstName}</span>}
          </div>
          <div>
            <label>Last Name:</label>
            {editing ? <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> : <span>{lastName}</span>}
          </div>
          <div>
            <label>Email/Mobile:</label>
            {editing ? <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> : <span>{email}</span>}
          </div>
        </div>
        {editing && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
};

export default AdminProfile;
