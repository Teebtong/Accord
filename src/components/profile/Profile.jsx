import React from 'react';
import './Profile.css';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
    favoriteAccords: 5,
    createdAccords: 2
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-avatar">
            <div className="avatar-placeholder">{user.name.charAt(0)}</div>
          </div>
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Member since {user.joinDate}</p>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-card">
            <h3>Favorite Accords</h3>
            <p className="stat-value">{user.favoriteAccords}</p>
          </div>
          <div className="stat-card">
            <h3>Created Accords</h3>
            <p className="stat-value">{user.createdAccords}</p>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button">My Collections</button>
          <button className="profile-button">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
