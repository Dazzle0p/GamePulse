const express = require("express");
const playerController = require("../controllers/playerController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// --- CREATE / UPLOAD ---
router.post(
  "/upload",
  authMiddleware.protect,
  authMiddleware.restrictTo("admin"), // Only admin can upload all players
  playerController.uploadPlayersFromJSON
);
router.post(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("admin"), // Only admin can add a player
  playerController.createPlayer
);

// --- READ ---
router.get("/", playerController.getAllPlayers); // Public
router.get("/:id", playerController.getPlayerById); // Public
router.get("/profile/:ign", playerController.getPlayerByIGN); // Public
router.get("/team/:teamName", playerController.getPlayersByTeam); // Public
router.get("/status/:status", playerController.getPlayersByStatus); // Public
router.get("/search/:query", playerController.searchPlayers); // Public search

// --- UPDATE ---
router.put(
  "/:id",
  authMiddleware.protect,
  authMiddleware.restrictTo("admin"),
  playerController.updatePlayerById
);
router.patch(
  "/:id/like",
  authMiddleware.optionalAuth, // Users can like if logged in, else ignore
  playerController.incrementLike
);
router.patch(
  "/:id/unlike",
  authMiddleware.optionalAuth,
  playerController.decrementLike
);

// --- DELETE ---
router.delete(
  "/:id",
  authMiddleware.protect,
  authMiddleware.restrictTo("admin"),
  playerController.deletePlayerById
);
router.delete(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("admin"),
  playerController.deleteAllPlayers
);

module.exports = router;

// Route to upload players from JSON
router.post("/upload-json", playerController.uploadPlayersFromJSON);

module.exports = router;
