const axios = require("axios");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const path = require("path");

async function uploadImageFromUrl(url, folder = "players") {
  try {
    if (!url) return null;

    // Download the image temporarily
    const tempPath = path.join(__dirname, "../temp", `${Date.now()}.jpg`);
    const response = await axios.get(url, { responseType: "arraybuffer" });
    fs.writeFileSync(tempPath, response.data);

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(tempPath, {
      folder,
      use_filename: true,
      unique_filename: false,
    });

    // Clean up temp file
    fs.unlinkSync(tempPath);

    return result.secure_url;
  } catch (err) {
    console.error(`Cloudinary upload failed for URL: ${url}`, err.message);
    return null;
  }
}

module.exports = uploadImageFromUrl;
