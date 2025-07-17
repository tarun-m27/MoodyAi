require("dotenv").config(); // Load environment variables
const express = require("express");
const sequelize = require("./db"); // Sequelize instance
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const journalRoutes = require("./routes/journalRoutes");
const User = require("./models/userModel");     // Ensure models are loaded before syncing
const Journal = require("./models/journalModel");

const app = express(); // 🔺 THIS must come before app.use()
const PORT = process.env.PORT || 5000;

app.use(cors());         // ✅ Now this works properly
app.use(express.json()); // For parsing JSON requests

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

// Sync DB and start server
async function startServer() {
  try {
    await sequelize.sync(); // Use sync({ alter: true }) for dev
    console.log("✅ Database synced successfully.");

    app.listen(PORT, () => {
      console.log(`🌐 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect or sync the database:", error);
  }
}

startServer();
