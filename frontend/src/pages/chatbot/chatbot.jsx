import React, { useState } from "react";
import "./chatbot.css";

const characters = ["Mother", "Father", "Friend", "Partner"];

function Chatbot() {
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: "user", text: input }]);
        setInput("");

        // Simulate a fake reply for now
        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text: `Hello from ${selectedCharacter}` }]);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
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

            <div className="chatbot-content">
                <h1 className="chatbot-heading">💬 Companion Chatbot</h1>

                <div className="character-selector">
                    <p>Select your companion:</p>
                    <div className="character-button-row">
                        {characters.map((char) => (
                            <button
                                key={char}
                                className={`char-btn ${selectedCharacter === char ? "selected" : ""}`}
                                onClick={() => setSelectedCharacter(char)}
                            >
                                {char}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedCharacter && (
                    <div className="chatbox">
                        <div className="chatbox-header">{selectedCharacter}</div>
                        <div className="chatbox-body">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chatbox-footer">
                            <textarea
                                rows="1"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button onClick={handleSend}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chatbot;


// import React, { useState } from "react";
// import "./chatbot.css";

// const characters = ["Mother", "Father", "Friend", "Partner"];

// function Chatbot() {
//     const [selectedCharacter, setSelectedCharacter] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");

//     const handleSend = () => {
//         if (!input.trim()) return;
//         setMessages([...messages, { sender: "user", text: input }]);
//         setInput("");
//         // Future: Send to backend and append AI reply
//     };

//     return (
//         <div className="chatbot-container">
//             <nav className="home-navbar">
//                 <div className="home-logo">Moody Ai</div>
//                 <div className="home-nav-links">
//                     <a href="#">Companion Chatbot</a>
//                     <a href="#">Insights</a>
//                     <a href="#">Weekly Chart</a>
//                     <a href="#">Dashboard</a>
//                 </div>
//             </nav>

//             <div className="chatbot-content">
//                 <h1 className="chatbot-heading">💬 Companion Chatbot</h1>

//                 <div className="character-selector">
//                     <p>Select your companion:</p>
//                     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//                         {characters.map((char) => (
//                             <button
//                                 key={char}
//                                 className={`char-btn ${selectedCharacter === char ? "selected" : ""}`}
//                                 onClick={() => setSelectedCharacter(char)}
//                             >
//                                 {char}
//                             </button>
//                         ))}
//                     </div>
//                 </div>


//                 {selectedCharacter && (
//                     <div className="chatbox">
//                         <div className="chatbox-header">{selectedCharacter}</div>
//                         <div className="chatbox-body">
//                             {messages.map((msg, index) => (
//                                 <div
//                                     key={index}
//                                     className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
//                                 >
//                                     {msg.text}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="chatbox-footer">
//                             <input
//                                 type="text"
//                                 placeholder="Type a message..."
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                             />
//                             <button onClick={handleSend}>Send</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Chatbot;
