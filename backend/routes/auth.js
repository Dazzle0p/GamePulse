// routes/auth.js
const express = require("express");
const {
  signup,
  login,
  getMe,
  updateMe,
} = require("../controllers/authController");
const { protect, restrictTo, optionalAuth } = require("../middleware/auth");
const {
  validateRegistration,
  validateLogin,
  sanitizeInput,
} = require("../middleware/validation");

const router = express.Router();

// Apply input sanitization to all routes
router.use(sanitizeInput);

// Public routes
router.post("/signup", validateRegistration, signup);
router.post("/login", validateLogin, login);

// Protected routes
router.use(protect); // All routes after this middleware are protected

router.get("/me", getMe);
router.patch("/updateMe", updateMe);

// Admin only routes
router.get("/admin", restrictTo("admin"), (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the admin panel",
  });
});

module.exports = router;
