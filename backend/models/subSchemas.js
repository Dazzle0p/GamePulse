// /models/subSchemas.js

import mongoose from "mongoose";

// For players within a team
export const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
  },
  { _id: false }
); // _id is not needed for sub-documents here

// For social media links with follower counts
export const socialPlatformSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    followers: { type: Number, default: 0 },
  },
  { _id: false }
);

// For sponsors
export const sponsorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logoUrl: { type: String, required: true },
    website: { type: String },
  },
  { _id: false }
);

// For achievements
export const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["Tournament", "Award", "Milestone"],
      required: true,
    },
    description: { type: String },
    year: { type: Number, required: true },
    relatedGame: { type: String },
    position: { type: String },
    awardedBy: { type: String },
    mediaUrl: { type: String },
  },
  { _id: false }
);
