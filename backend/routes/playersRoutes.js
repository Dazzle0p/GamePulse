// routes/players.js
const express = require("express");
const {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getPlayersByGame,
  getPlayersByOrganization,
} = require("../controllers/playerController");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(getPlayers)
  .post(protect, authorize("admin"), createPlayer);

router
  .route("/:id")
  .get(getPlayer)
  .put(protect, authorize("admin"), updatePlayer)
  .delete(protect, authorize("admin"), deletePlayer);

router.route("/game/:game").get(getPlayersByGame);
router.route("/org/:orgId").get(getPlayersByOrganization);

module.exports = router;
