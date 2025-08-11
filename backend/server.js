require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const youtubeRoutes = require("./routes/youtubeRoutes");

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to GamePulse Server" });
});

app.use("/api/youtube", youtubeRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT : ${PORT}`);
});
