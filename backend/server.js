const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config();

// Route files
const organizations = require("./routes/organizations");
const players = require("./routes/players");
const teams = require("./routes/teams");
const creators = require("./routes/creators");
const auth = require("./routes/auth");
const sponsors = require("./routes/sponsors");
const uploads = require("./routes/uploads");

// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Body parser
app.use(express.json({ limit: "10mb" }));

// Cookie parser (if using cookies for auth)
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Security middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Enable CORS
app.use(cors());

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
  });
}

// Mount routers
app.use("/api/organizations", organizations);
app.use("/api/players", players);
app.use("/api/teams", teams);
app.use("/api/creators", creators);
app.use("/api/auth", auth);
app.use("/api/sponsors", sponsors);
app.use("/api/uploads", uploads);

// Error handling middleware
const errorHandler = require("./middleware/error");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
