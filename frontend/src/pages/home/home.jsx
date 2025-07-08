import React, { useState } from "react";
import "./home.css";

function Home() {
  const [thoughts, setThoughts] = useState("");
  const [moods, setMoods] = useState([]); // Changed from mood (string) to moods (array)
  const [tags, setTags] = useState([]);
  const [activities, setActivities] = useState([]);

const emojis = ["😄", "😊", "😎",  "😇", "😞",  "😭", "😠", "😤"];
const emotionTags = [
"Joyful", "Grateful", "Productive", "Lonely", "Calm",
 "Motivated", "Hopeful", "Optimistic", "Confused", "Stressed",
"Tired", "Bored",  "Anxious","Energetic"
];
const activityList = [
  "Meditated", "Exercised", "Socialized", 
  "Read a Book", "Watched a Movie", "Went for a Walk", "Did Yoga",
  "Cooked", "Worked on a Hobby",  "Listened to Music"
];

  const toggleTag = (tag, list, setList) => {
    if (list.includes(tag)) {
      setList(list.filter((t) => t !== tag));
    } else {
      setList([...list, tag]);
    }
  };

  const handleJournalSubmit = () => {
    alert("Journal submitted:\n" + thoughts);
    setThoughts("");
  };

  const handleMoodSubmit = () => {
    alert("Moods selected: " + moods.join(" "));
    setMoods([]);
  };

  const handleTagsSubmit = () => {
    alert("Tags: " + tags.join(", ") + "\nActivities: " + activities.join(", "));
    setTags([]);
    setActivities([]);
  };

  return (
    <div className="home-container">
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

      <div className="home-upper-section">
        <section className="home-section">
          <h2>📝 Daily Journaling</h2>
          <p>Log your thoughts and emotions by writing it down — your safe space to vent or reflect.</p>
          <textarea
            placeholder="Write your thoughts here..."
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
          />
          {/* <button onClick={handleJournalSubmit}>Submit</button> */}
        </section>

        <section className="home-section">
          <h2>🎭 Mood Tracking</h2>
          <p>Express how you feel daily using emojis  and track emotional trends over time</p>
          <div className="home-emoji-list">
            {emojis.map((e, i) => (
              <button
                key={i}
                className={`home-emoji-btn ${moods.includes(e) ? "selected" : ""}`}
                onClick={() => toggleTag(e, moods, setMoods)}
              >
                {e}
              </button>
            ))}
          </div>
          {/* <button onClick={handleMoodSubmit}>Submit</button> */}
        </section>
      </div>

      <section className="home-section">
        <h2>🎯 Emotion Tags & Activities</h2>
        <p>Select from helpful tags (like “anxious”, “grateful”) and check off daily habits like meditation or exercise.</p>

        <div className="home-sub-section">
          <strong>Emotion Tags:</strong>
          <div className="home-chip-container">
            {emotionTags.map((tag) => (
              <div
                key={tag}
                className={`home-chip ${tags.includes(tag) ? "selected" : ""}`}
                onClick={() => toggleTag(tag, tags, setTags)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="home-sub-section">
          <strong>Activities Done:</strong>
          <div className="home-chip-container">
            {activityList.map((act) => (
              <div
                key={act}
                className={`home-chip ${activities.includes(act) ? "selected" : ""}`}
                onClick={() => toggleTag(act, activities, setActivities)}
              >
                {act}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => {
          handleTagsSubmit();
          handleMoodSubmit();
          handleJournalSubmit();
        }}>
          Get Insights
        </button>      </section>
    </div>
  );
}

export default Home;
