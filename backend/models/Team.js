// /models/Team.js

import mongoose from "mongoose";
import { playerSchema } from "./subSchemas.js";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    game: { type: String, required: true },
    logoUrl: { type: String, required: true },
    achievements: { type: Number, default: 0 },
    establishedYear: { type: Number },
    players: [playerSchema], // Embedding the player sub-schema
    // Reference to the parent organization
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
