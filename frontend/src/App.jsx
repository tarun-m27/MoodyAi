import React, { useState, useEffect } from "react";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; 
import LandingPage from "./pages/landingPage";
import Insights from "./pages/insights/insights";
import Chatbot from "./pages/chatbot/chatbot";
import Dashboard from "./pages/dashboard/dashboard";
import Chart from "./pages/chart/chart";
import Signin from "./pages/signin/signin";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [, setLandingPageData] = useState({});
  useEffect(() => {
  setLandingPageData(JsonData);
}, [setLandingPageData]);


  return (

    <><Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chart" element={<Chart />} />
        
      </Routes>
    </Router>
    
    
   </>
  );
};

export default App;
