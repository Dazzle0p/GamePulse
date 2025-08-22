import express from "express";
import * as creatorController from "../controllers/creatorController.js";

// Allows access to params from parent routers (e.g., :orgId)
const router = express.Router({ mergeParams: true });

// Routes mounted on /api/organizations/:orgId/creators
router
  .route("/")
  .post(creatorController.createCreator)
  .get(creatorController.getCreatorsForOrganization);

// Routes mounted on /api/creators
router
  .route("/:creatorId")
  .get(creatorController.getCreatorById)
  .patch(creatorController.updateCreator)
  .delete(creatorController.deleteCreator);

// A separate router for the global GET /api/creators route
const globalCreatorRouter = express.Router();
globalCreatorRouter.get("/", creatorController.getAllCreators);

export { router as nestedCreatorRouter, globalCreatorRouter };
