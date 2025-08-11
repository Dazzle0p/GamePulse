const express = require("express");
require("dotenv").config();
const router = express.Router();
const { google } = require("googleapis");

// Youtube Client
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

// @routes GET /api/youtube/:id
// @desc Get Stats of an youtube channel
// @access Public

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await youtube.channels.list({
      id,
      part: "snippet,statistics,contentDetails,brandingSettings",
    });

    if (response.data.items.length === 0) {
      return res.status(404).json({ message: "Channel not found" });
    }

    const channel = response.data.items[0];

    res.send(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

module.exports = router;
