// /models/Creator.js

import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    profileImage: { type: String },
    primaryPlatform: { type: String, required: true },
    followerCount: { type: Number, default: 0 },
    contentType: { type: String },
    // A map is great for flexible key-value pairs
    socialLinks: {
      type: Map,
      of: String,
    },
    // Reference to the parent organization
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Creator", creatorSchema);
