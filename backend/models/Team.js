// models/Team.js
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  realName: String,
  role: { type: String, required: true },
  profileImage: String,
});

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    game: { type: String, required: true },
    logoUrl: String,
    achievements: Number,
    establishedYear: Number,
    players: [playerSchema],
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
