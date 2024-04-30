import React from 'react';
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";

function ProfilePage() {
  const username = "Sahil"; // Replace with the actual username from Signup.jsx

  return (
    <Layout>
      <Navbar/>
      <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
          <div className="profile-info">
            <img src="https://picsum.photos/200" alt="profile avatar" />
            <div className="user-details">
              <p>&nbsp;{username}</p>
              <p>1 Public Playlist</p>
            </div>
          </div>
        </div>
        <div className="playlists">
          <h2>Public Playlists</h2>
          <ul>
            <li>JHOOM</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
