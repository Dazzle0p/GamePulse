import express from "express";
import * as teamController from "../controllers/teamController.js";

// This allows us to access params from the parent router (e.g., :orgId)
const router = express.Router({ mergeParams: true });

// Mounted on /api/organizations/:orgId/teams
router
  .route("/")
  .post(teamController.createTeam)
  .get(teamController.getTeamsForOrganization);

// Mounted on /api/teams
router
  .route("/:teamId")
  .get(teamController.getTeamById)
  .patch(teamController.updateTeam)
  .delete(teamController.deleteTeam);

// Route for getting all teams globally
const globalTeamRouter = express.Router();
globalTeamRouter.get("/", teamController.getAllTeams);

// Add these routes inside the teamRoutes.js file, attached to the main router
router.post("/:teamId/players", teamController.addPlayerToTeam);
router.delete(
  "/:teamId/players/:playerId",
  teamController.removePlayerFromTeam
);

export { router as nestedTeamRouter, globalTeamRouter };
