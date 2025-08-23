const cloudinary = require("cloudinary").v2;
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../utils/asyncHandler");

// @desc    Upload image to Cloudinary
// @route   POST /api/uploads/image
// @access  Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  // Upload image to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "esports-platform",
    use_filename: true,
    unique_filename: false,
  });

  res.status(200).json({
    success: true,
    data: {
      url: result.secure_url,
      public_id: result.public_id,
    },
  });
});

// @desc    Delete image from Cloudinary
// @route   DELETE /api/uploads/image/:public_id
// @access  Private
exports.deleteImage = asyncHandler(async (req, res, next) => {
  const { public_id } = req.params;

  // Delete image from cloudinary
  const result = await cloudinary.uploader.destroy(public_id);

  if (result.result !== "ok") {
    return next(new ErrorResponse("Image not found", 404));
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
