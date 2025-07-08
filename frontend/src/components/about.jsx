import React from "react";

export const About = () => {
  return (
    <div id="about" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                <strong>Moody</strong> is your safe space for emotional expression.
                Whether you're feeling happy, anxious, lonely, or lost — it's okay to feel everything.
                We created Moody to help you track your mental health, reflect on your emotions through journaling,
                and talk to a compassionate AI companion who truly listens.
                We believe in emotional self-awareness, consistency, and gentle guidance — all in one beautifully designed app.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Why Choose Us?</h2>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>❤️ Emotion-first journaling</li>
                    <li>🤖 Personalized AI companion</li>
                    <li>📊 Mood & stress tracking</li>
                    <li>💬 Daily GPT-powered insights</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};
