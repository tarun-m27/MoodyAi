import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./dashboard.css";
import "../home/home.css"

function Dashboard() {
  const [userData, setUserData] = useState({ name: "", email: "" });
   const navigate = useNavigate()
  useEffect(() => {
    // Simulate fetch from backend (replace with real API later)
    const mockUser = {
      name: "Tarun M",
      email: "tarun@example.com",
    };
    setUserData(mockUser);
  }, []);
   const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <nav className="home-navbar">
        <div className="home-logo"><a href="/home">Moody Ai</a></div>
        <div className="home-nav-links">
          <a href="/home">Home</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/insights">Insights</a>
          <a href="/chart">Chart</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1 className="dashboard-heading">👤 Account Dashboard</h1>
        <div className="user-card">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
<button className="signout-button" onClick={handleSignOut}>
      Sign Out
    </button>
      </div>
    </div>
  );
}

export default Dashboard;
