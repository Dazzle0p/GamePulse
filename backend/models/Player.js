const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  date: String,
  placement: String,
  tier: String,
  tournament: String,
  tournamentLink: String,
  team: String,
  teamLink: String,
  prize: String,
});

const earningsChartSchema = new mongoose.Schema({
  year: String,
  earnings: Number,
});

const socialLinkSchema = new mongoose.Schema({
  platform: String,
  url: String,
});

const referenceSchema = new mongoose.Schema({
  title: String,
  url: String,
  date: String,
});

const playerSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true },
    playerProfileLink: { type: String, required: true, unique: true },

    // Basic info
    realName: String,
    ign: String,
    birthDate: String,
    country: String,
    status: { type: String, default: "inActive" },
    image: String,
    earnings: String,
    game: { type: String, default: "BGMI" },

    // Team info
    team: {
      name: String,
      logo: String,
      link: String, // optional team link
    },

    // Collections
    achievements: { type: [achievementSchema], default: [] },
    earningsChart: { type: [earningsChartSchema], default: [] },
    socialLinks: { type: [socialLinkSchema], default: [] },
    mediaLinks: { type: [socialLinkSchema], default: [] },
    galleryImages: { type: [String], default: [] },
    references: { type: [referenceSchema], default: [] },
    awards: { type: [String], default: [] },
    likeCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
