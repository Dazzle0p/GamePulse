import Creator from "../models/Creator.js";
import Organization from "../models/Organization.js";

// @desc    Create a creator for a specific organization
// @route   POST /api/organizations/:orgId/creators
export const createCreator = async (req, res) => {
  try {
    const orgId = req.params.orgId;
    const organization = await Organization.findById(orgId);

    if (!organization) {
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }

    // Add the organization ID to the creator data before creating
    const creatorData = { ...req.body, organization: orgId };
    const creator = await Creator.create(creatorData);

    // Add the new creator's ID to the organization's creators array
    organization.creators.push(creator._id);
    await organization.save();

    res.status(201).json({ success: true, data: creator });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all creators for a specific organization
// @route   GET /api/organizations/:orgId/creators
export const getCreatorsForOrganization = async (req, res) => {
  try {
    const creators = await Creator.find({ organization: req.params.orgId });
    res
      .status(200)
      .json({ success: true, count: creators.length, data: creators });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all creators globally
// @route   GET /api/creators
export const getAllCreators = async (req, res) => {
  try {
    const creators = await Creator.find().populate(
      "organization",
      "name logoUrl"
    ); // Populate basic org info
    res
      .status(200)
      .json({ success: true, count: creators.length, data: creators });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get a single creator by ID
// @route   GET /api/creators/:creatorId
export const getCreatorById = async (req, res) => {
  try {
    const creator = await Creator.findById(req.params.creatorId).populate(
      "organization",
      "name"
    );
    if (!creator) {
      return res
        .status(404)
        .json({ success: false, message: "Creator not found" });
    }
    res.status(200).json({ success: true, data: creator });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a creator
// @route   PATCH /api/creators/:creatorId
export const updateCreator = async (req, res) => {
  try {
    const creator = await Creator.findByIdAndUpdate(
      req.params.creatorId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!creator) {
      return res
        .status(404)
        .json({ success: false, message: "Creator not found" });
    }
    res.status(200).json({ success: true, data: creator });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a creator
// @route   DELETE /api/creators/:creatorId
export const deleteCreator = async (req, res) => {
  try {
    const creator = await Creator.findById(req.params.creatorId);
    if (!creator) {
      return res
        .status(404)
        .json({ success: false, message: "Creator not found" });
    }

    // Remove the creator reference from the parent organization
    await Organization.findByIdAndUpdate(creator.organization, {
      $pull: { creators: creator._id },
    });

    await creator.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Creator deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
