const mongoose = require("mongoose");

const socialLinksSchema = new mongoose.Schema({
  website: { type: String },
  youtube: { url: String, followers: Number },
  instagram: { url: String, followers: Number },
  twitter: { url: String, followers: Number },
  twitch: { url: String, followers: Number },
  discord: { url: String, followers: Number },
});

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ["Tournament", "Award", "Milestone"],
    required: true,
  },
  description: String,
  year: Number,
  relatedGame: String,
  position: String,
  awardedBy: String,
  mediaUrl: String,
});

const founderSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  role: String,
  image: String,
  bio: String,
  socialLinks: {
    twitter: String,
    instagram: String,
    linkedin: String,
  },
});

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logoUrl: { type: String, required: true },
  bannerUrl: String,
  foundedYear: Number,
  headquarters: String,
  themeColor: String,
  socialLinks: socialLinksSchema,
  achievements: [achievementSchema],
  founders: [founderSchema],
  coFounders: [founderSchema],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Cascade delete players, teams and creators when an organization is deleted
organizationSchema.pre("remove", async function (next) {
  await this.model("Player").deleteMany({ organization: this._id });
  await this.model("Team").deleteMany({ organization: this._id });
  await this.model("Creator").deleteMany({ organization: this._id });
  next();
});

module.exports = mongoose.model("Organization", organizationSchema);
