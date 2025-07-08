import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-pencil-square-o"></i>
            <h3>Daily Journaling</h3>
            <p>Log your thoughts, emotions, and stress levels with a few taps — your safe space to vent or reflect.</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-smile-o"></i>
            <h3>Mood Tracking</h3>
            <p>Rate how you feel daily using emojis or a mood scale, and track emotional trends over time.</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-lightbulb-o"></i>
            <h3>Personalized Suggestions</h3>
            <p>Receive thoughtful, daily tips based on your mood and stress level — designed to support your wellness journey.</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <i className="fa fa-comments"></i>
            <h3>Companion Chatbot</h3>
            <p>Feeling lonely? Talk to a virtual "Mom," "Dad," or "Partner" for comfort and support.</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-line-chart"></i>
            <h3>Weekly Mood Chart</h3>
            <p>Visualize your mood and stress patterns over time with easy-to-read graphs.</p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-heartbeat"></i>
            <h3>Habit Recommendations</h3>
            <p>Get suggestions for wellness habits based on your journaling and emotional patterns.</p>
          </div>
        </div>


      </div>
    </div>
  );
};
