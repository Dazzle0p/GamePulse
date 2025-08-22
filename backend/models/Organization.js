// /models/Organization.js

import mongoose from "mongoose";
import {
  socialPlatformSchema,
  sponsorSchema,
  achievementSchema,
} from "./subSchemas.js";

const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    logoUrl: { type: String },
    bannerUrl: { type: String },
    foundedYear: { type: Number },
    headquarters: { type: String },
    themeColor: { type: String, default: "#FFFFFF" },

    // Using a Map for an object with dynamic keys (youtube, twitter, etc.)
    socialLinks: {
      type: Map,
      of: socialPlatformSchema,
    },

    // Embedding an array of sponsor documents
    sponsors: [sponsorSchema],

    // Embedding an array of achievement documents
    achievements: [achievementSchema],

    // Referencing the Team and Creator models
    participatingTeams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    creators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Organization", organizationSchema);
