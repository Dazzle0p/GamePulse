import express from "express";
import * as organizationController from "../controllers/organizationController.js";

const router = express.Router();

// POST /api/organizations
router.post("/", organizationController.createOrganization);

// GET /api/organizations
router.get("/", organizationController.getAllOrganizations);

// GET /api/organizations/:orgId
router.get("/:orgId", organizationController.getOrganizationById);

// PATCH /api/organizations/:orgId
router.patch("/:orgId", organizationController.updateOrganization);

// DELETE /api/organizations/:orgId
router.delete("/:orgId", organizationController.deleteOrganization);

export default router;
