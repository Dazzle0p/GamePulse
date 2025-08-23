const Organization = require("../models/Organization");
const Player = require("../models/Player");
const Team = require("../models/Team");
const Creator = require("../models/Creator");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../utils/asyncHandler");

// @desc    Get all organizations
// @route   GET /api/organizations
// @access  Public
exports.getOrganizations = asyncHandler(async (req, res, next) => {
  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  // Finding resource
  let query = Organization.find(JSON.parse(queryStr)).populate(
    "user",
    "name email"
  );

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Organization.countDocuments(JSON.parse(queryStr));

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const organizations = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: organizations.length,
    pagination,
    data: organizations,
  });
});

// @desc    Get single organization
// @route   GET /api/organizations/:id
// @access  Public
exports.getOrganization = asyncHandler(async (req, res, next) => {
  const organization = await Organization.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!organization) {
    return next(
      new ErrorResponse(
        `Organization not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: organization,
  });
});

// @desc    Create organization
// @route   POST /api/organizations
// @access  Private
exports.createOrganization = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const organization = await Organization.create(req.body);

  res.status(201).json({
    success: true,
    data: organization,
  });
});

// @desc    Update organization
// @route   PUT /api/organizations/:id
// @access  Private
exports.updateOrganization = asyncHandler(async (req, res, next) => {
  let organization = await Organization.findById(req.params.id);

  if (!organization) {
    return next(
      new ErrorResponse(
        `Organization not found with id of ${req.params.id}`,
        404
      )
    );
  }

  // Make sure user is organization owner or admin
  if (
    organization.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this organization`,
        401
      )
    );
  }

  organization = await Organization.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: organization,
  });
});

// @desc    Delete organization
// @route   DELETE /api/organizations/:id
// @access  Private
exports.deleteOrganization = asyncHandler(async (req, res, next) => {
  const organization = await Organization.findById(req.params.id);

  if (!organization) {
    return next(
      new ErrorResponse(
        `Organization not found with id of ${req.params.id}`,
        404
      )
    );
  }

  // Make sure user is organization owner or admin
  if (
    organization.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this organization`,
        401
      )
    );
  }

  await organization.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Get organization teams
// @route   GET /api/organizations/:id/teams
// @access  Public
exports.getOrganizationTeams = asyncHandler(async (req, res, next) => {
  const teams = await Team.find({ organization: req.params.id });

  res.status(200).json({
    success: true,
    count: teams.length,
    data: teams,
  });
});

// @desc    Get organization players
// @route   GET /api/organizations/:id/players
// @access  Public
exports.getOrganizationPlayers = asyncHandler(async (req, res, next) => {
  const players = await Player.find({ organization: req.params.id });

  res.status(200).json({
    success: true,
    count: players.length,
    data: players,
  });
});

// @desc    Get organization creators
// @route   GET /api/organizations/:id/creators
// @access  Public
exports.getOrganizationCreators = asyncHandler(async (req, res, next) => {
  const creators = await Creator.find({ organization: req.params.id });

  res.status(200).json({
    success: true,
    count: creators.length,
    data: creators,
  });
});

// @desc    Upload logo for organization
// @route   PUT /api/organizations/:id/logo
// @access  Private
exports.uploadLogo = asyncHandler(async (req, res, next) => {
  const organization = await Organization.findById(req.params.id);

  if (!organization) {
    return next(
      new ErrorResponse(
        `Organization not found with id of ${req.params.id}`,
        404
      )
    );
  }

  // Make sure user is organization owner or admin
  if (
    organization.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this organization`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Please upload an image file", 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  file.name = `logo_${organization._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Problem with file upload", 500));
    }

    await Organization.findByIdAndUpdate(req.params.id, { logoUrl: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
