// routes/organizations.js
const express = require("express");
const {
  getOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getOrganizationTeams,
  getOrganizationPlayers,
  getOrganizationCreators,
} = require("../controllers/organizationController");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(getOrganizations)
  .post(protect, authorize("admin"), createOrganization);

router
  .route("/:id")
  .get(getOrganization)
  .put(protect, authorize("admin"), updateOrganization)
  .delete(protect, authorize("admin"), deleteOrganization);

router.route("/:id/teams").get(getOrganizationTeams);
router.route("/:id/players").get(getOrganizationPlayers);
router.route("/:id/creators").get(getOrganizationCreators);

module.exports = router;
