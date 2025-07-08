import React, { useState, useEffect } from "react";
import "./insights.css";
import "../home/home.css"
function Insights() {
  const [insightText, setInsightText] = useState("");

  // This useEffect can later be used to fetch data from your backend/AI API
  useEffect(() => {
    // Example placeholder — you can replace this with actual API call
    setInsightText("Your insights will appear here after analyzing your journal, mood, and activities.");
  }, []);

  return (
    <div className="insights-container">
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

      <div className="insights-content">
        <h1 className="insights-heading">📊 Your Daily Insight</h1>
        <div className="insight-box">
          {insightText}
        </div>
      </div>
    </div>
  );
}

export default Insights;
