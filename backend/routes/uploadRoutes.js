const express = require("express");
const { uploadImage, deleteImage } = require("../controllers/uploadController");

const { protect, authorize } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/image", protect, upload.single("image"), uploadImage);
router.delete("/image/:public_id", protect, deleteImage);

module.exports = router;
