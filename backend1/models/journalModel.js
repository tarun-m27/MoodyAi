const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./userModel"); // To associate with user

const Journal = sequelize.define(
  "Journal",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emoji: {
      type: DataTypes.JSON, // Supports multiple emojis: ["😐", "😞"]
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSON, // Example: ["anxious", "grateful"]
      allowNull: true,
    },
    activities: {
      type: DataTypes.JSON, // Example: ["meditated", "exercised"]
      allowNull: true,
    },
    entry: {
      type: DataTypes.TEXT, // User journal entry
      allowNull: true,
    },
    suggestion: {
      type: DataTypes.TEXT, // Generated via AI or static
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "journals",
    timestamps: false, // Disable createdAt, updatedAt
  }
);

// Journal belongs to a User
Journal.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = Journal;
