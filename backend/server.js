import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import express from "express";
import organizationRoutes from "./routes/organizationRoutes.js";
import { nestedTeamRouter, globalTeamRouter } from "./routes/teamRoutes.js";
import {
  nestedCreatorRouter,
  globalCreatorRouter,
} from "./routes/creatorRoutes.js";

// import { nestedCreatorRouter, globalCreatorRouter } from './routes/creatorRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// --- Connecting Db ---
connectDB();

// --- Middleware ---
app.use(express.json()); // To parse JSON bodies

// --- API Routes ---
app.use("/api/organizations", organizationRoutes);

// For nested team routes -> /api/organizations/:orgId/teams
organizationRoutes.use("/:orgId/teams", nestedTeamRouter);

// For global team routes -> /api/teams
app.use("/api/teams", globalTeamRouter, nestedTeamRouter);

// --- Creator Routes ---

// For nested routes -> /api/organizations/:orgId/creators
organizationRoutes.use("/:orgId/creators", nestedCreatorRouter);

// For global routes -> /api/creators
app.use("/api/creators", globalCreatorRouter, nestedCreatorRouter);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
