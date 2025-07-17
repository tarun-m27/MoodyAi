const Journal = require("../models/journalModel");

exports.createJournal = async (req, res) => {
  const { mood, stressLevel, tags, activities, entry, suggestion } = req.body;

  try {
    const journal = await Journal.create({
      mood,
      stressLevel,
      tags,
      activities,
      entry,
      suggestion,
      userId: req.user.id,
    });

    res.status(201).json(journal);
  } catch (err) {
    res.status(500).json({ message: "Failed to save journal" });
  }
};

exports.getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.findAll({
      where: { userId: req.user.id },
      order: [["date", "DESC"]],
    });

    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch journals" });
  }
};
