// middleware/validation.js
const validator = require("validator");
const User = require("../models/User");

// Validate email format
exports.validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      status: "error",
      message: "Email is required",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid email address",
    });
  }

  next();
};

// Validate password strength
exports.validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      status: "error",
      message: "Password is required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      status: "error",
      message: "Password must be at least 6 characters long",
    });
  }

  next();
};

// Validate user registration data
exports.validateRegistration = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Check required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Name, email, and password are required",
    });
  }

  // Validate name length
  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({
      status: "error",
      message: "Name must be between 2 and 50 characters",
    });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid email address",
    });
  }

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      status: "error",
      message: "User already exists with this email",
    });
  }

  // Validate password strength
  if (password.length < 6) {
    return res.status(400).json({
      status: "error",
      message: "Password must be at least 6 characters long",
    });
  }

  // Validate role if provided
  const validRoles = ["admin", "user", "org-admin", "to-admin", "media-admin"];
  if (role && !validRoles.includes(role)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid role specified",
    });
  }

  next();
};

// Validate user login data
exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Email and password are required",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid email address",
    });
  }

  next();
};

// Validate object ID in URL parameters
exports.validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!id || !validator.isMongoId(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  next();
};

// Sanitize user input to prevent XSS attacks
exports.sanitizeInput = (req, res, next) => {
  if (req.body.name) {
    req.body.name = validator.escape(validator.trim(req.body.name));
  }

  if (req.body.email) {
    req.body.email = validator.normalizeEmail(validator.trim(req.body.email));
  }

  next();
};
