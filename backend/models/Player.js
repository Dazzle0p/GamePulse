// models/Player.js
const mongoose = require("mongoose");

const socialLinksSchema = new mongoose.Schema({
  twitter: String,
  instagram: String,
  youtube: String,
  twitch: String,
});

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    realName: { type: String, required: true },
    profileImage: { type: String, required: true },
    game: { type: String, required: true },
    team: { type: String, required: true },
    role: { type: String, required: true },
    earnings: String,
    achievements: String,
    mvp: Number,
    tier: {
      type: String,
      enum: ["S-Tier", "A-Tier", "B-Tier", "Elite"],
      default: "A-Tier",
    },
    region: String,
    social: socialLinksSchema,
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
