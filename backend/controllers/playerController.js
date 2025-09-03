const fs = require("fs");
const path = require("path");
const Player = require("../models/Player");
const mongoose = require("mongoose");
const uploadImageFromUrl = require("../utils/uploadCloudinary");

// --- CREATE ---
exports.createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// --- READ ---
exports.getAllPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};

exports.getPlayerById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid player ID format" });
    }

    // Find the player
    const player = await Player.findById(id);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.status(200).json(player);
  } catch (error) {
    console.error("Error fetching player:", error);
    res.status(500).json({ message: "Error fetching player", error });
  }
};

exports.getPlayerByIGN = async (req, res) => {
  const player = await Player.findOne({ ign: req.params.ign });
  res.json(player);
};

exports.getPlayersByTeam = async (req, res) => {
  const players = await Player.find({ "team.name": req.params.teamName });
  res.json(players);
};

exports.getPlayersByStatus = async (req, res) => {
  const players = await Player.find({ status: req.params.status });
  res.json(players);
};

// --- UPDATE ---
exports.updatePlayerById = async (req, res) => {
  const updated = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.incrementLike = async (req, res) => {
  const updated = await Player.findByIdAndUpdate(
    req.params.id,
    { $inc: { likeCount: 1 } },
    { new: true }
  );
  res.json(updated);
};

exports.decrementLike = async (req, res) => {
  const updated = await Player.findByIdAndUpdate(
    req.params.id,
    { $inc: { likeCount: -1 } },
    { new: true }
  );
  res.json(updated);
};

// --- DELETE ---
exports.deletePlayerById = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);
  res.json({ message: "Player deleted successfully" });
};

exports.deleteAllPlayers = async (req, res) => {
  await Player.deleteMany({});
  res.json({ message: "All players deleted successfully" });
};

// --- SEARCH ---
exports.searchPlayers = async (req, res) => {
  const query = req.params.query;
  const players = await Player.find({
    $or: [
      { playerName: { $regex: query, $options: "i" } },
      { realName: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  });
  res.json(players);
};

// // Upload all players from JSON
// exports.uploadPlayersFromJSON = async (req, res) => {
//   try {
//     // Resolve the path correctly
//     const filePath = path.join(
//       __dirname,
//       "../localData/bgmi_players_detailed.json"
//     );

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ message: "JSON file not found!" });
//     }

//     const playersData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

//     const bulkOps = playersData.map((player) => {
//       const flattenedPlayer = {
//         playerName: player.playerName,
//         playerProfileLink: player.playerProfileLink,
//         realName: player.details?.realName || player.realName || "Unknown",
//         ign: player.details?.ign || "Unknown",
//         birthDate: player.details?.birthDate || "Unknown",
//         country: player.details?.country || "Unknown",
//         status: player.details?.status || "Unknown",
//         team: {
//           name: player.team?.name || "",
//           logo: player.team?.logo || "",
//         },
//         image: player.details?.image || "",
//         earnings: player.details?.earnings || "",
//         achievements: player.details?.achievements || [],
//         earningsChart: player.details?.earningsChart || [],
//         socialLinks: player.details?.socialLinks || [],
//         mediaLinks: player.details?.mediaLinks || [],
//         galleryImages: player.details?.galleryImages || [],
//         references: player.details?.references || [],
//         awards: player.details?.awards || [],
//         game: player.details?.game || "BGMI",
//         likeCount: 0,
//       };

//       return {
//         updateOne: {
//           filter: { playerProfileLink: flattenedPlayer.playerProfileLink },
//           update: { $set: flattenedPlayer },
//           upsert: true,
//         },
//       };
//     });

//     await Player.bulkWrite(bulkOps);

//     res.status(200).json({
//       message: `🎉 Successfully uploaded ${playersData.length} players`,
//     });
//   } catch (error) {
//     console.error("❌ Error uploading players:", error);
//     res.status(500).json({ message: "Error uploading players", error });
//   }
// };

exports.uploadPlayersFromJSON = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../localData/bgmi_players_detailed.json"
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "JSON file not found!" });
    }

    const playersData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const bulkOps = [];

    for (const player of playersData) {
      // Upload main image
      const cloudImageUrl = await uploadImageFromUrl(player.details?.image);

      // Upload gallery images
      const galleryCloudUrls = await Promise.all(
        (player.details?.galleryImages || []).map((img) =>
          uploadImageFromUrl(img)
        )
      );

      const flattenedPlayer = {
        playerName: player.playerName,
        playerProfileLink: player.playerProfileLink,
        realName: player.details?.realName || player.realName || "Unknown",
        ign: player.details?.ign || "Unknown",
        birthDate: player.details?.birthDate || "Unknown",
        country: player.details?.country || "Unknown",
        status: player.details?.status || "Unknown",
        team: {
          name: player.team?.name || "",
          logo: player.team?.logo || "",
        },
        image: cloudImageUrl,
        earnings: player.details?.earnings || "",
        achievements: player.details?.achievements || [],
        earningsChart: player.details?.earningsChart || [],
        socialLinks: player.details?.socialLinks || [],
        mediaLinks: player.details?.mediaLinks || [],
        galleryImages: galleryCloudUrls.filter(Boolean),
        references: player.details?.references || [],
        awards: player.details?.awards || [],
        game: player.details?.game || "BGMI",
        likeCount: 0,
      };

      bulkOps.push({
        updateOne: {
          filter: { playerProfileLink: flattenedPlayer.playerProfileLink },
          update: { $set: flattenedPlayer },
          upsert: true,
        },
      });
    }

    await Player.bulkWrite(bulkOps);

    res.status(200).json({
      message: `🎉 Successfully uploaded ${playersData.length} players with Cloudinary images`,
    });
  } catch (error) {
    console.error("❌ Error uploading players:", error);
    res.status(500).json({ message: "Error uploading players", error });
  }
};
