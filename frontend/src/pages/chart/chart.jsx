import React, { useEffect, useState } from "react";
import "./chart.css";
import "../home/home.css"

function Chart() {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    // Simulate fetch from database
    const data = [
      {
        date: "2025-07-01",
        input: "Felt overwhelmed with work and studies.",
        suggestion: "Take small breaks, and try meditating for 10 minutes today.",
      },
      {
        date: "2025-07-02",
        input: "Had a great day with friends, feeling happy!",
        suggestion: "Keep up the social energy! Maybe write down what made you smile today.",
      },
      {
        date: "2025-07-03",
        input: "Bit anxious about upcoming exams.",
        suggestion: "Make a study plan and get proper sleep. Avoid overthinking.",
      },
      {
        date: "2025-07-04",
        input: "Exercised in the morning, felt fresh.",
        suggestion: "Continue this morning routine for improved energy.",
      },
      {
        date: "2025-07-05",
        input: "Lonely evening, missed my family.",
        suggestion: "Call or message a loved one, or write your feelings in your journal.",
      },
    ];
    setWeeklyData(data);
  }, []);

  return (
    <div className="chart-container">
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

      <div className="chart-content">
        <h1 className="chart-heading">📅 Weekly Mood Chart</h1>
        {weeklyData.map((entry, index) => (
          <div className="entry-box" key={index}>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Your Input:</strong> {entry.input}</p>
            <p><strong>AI Suggestion:</strong> {entry.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chart;
