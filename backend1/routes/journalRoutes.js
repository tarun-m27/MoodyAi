const express = require("express");
const { createJournal, getUserJournals } = require("../controllers/journalController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createJournal);
router.get("/", protect, getUserJournals);

module.exports = router;
