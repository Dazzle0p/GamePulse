import Organization from "../models/Organization.js";
import Team from "../models/Team.js";
import Creator from "../models/Creator.js";
import mongoose from "mongoose";

// @desc    Create a new organization
// @route   POST /api/organizations
export const createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json({ success: true, data: organization });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all organizations
// @route   GET /api/organizations
export const getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res
      .status(200)
      .json({
        success: true,
        count: organizations.length,
        data: organizations,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get a single organization by ID
// @route   GET /api/organizations/:orgId
export const getOrganizationById = async (req, res) => {
  try {
    let query = Organization.findById(req.params.orgId);

    // Check for a 'populate' query parameter to include full team/creator details
    if (req.query.populate === "true") {
      query = query.populate("participatingTeams").populate("creators");
    }

    const organization = await query;

    if (!organization) {
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }

    res.status(200).json({ success: true, data: organization });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update an organization
// @route   PATCH /api/organizations/:orgId
export const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(
      req.params.orgId,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators on update
      }
    );

    if (!organization) {
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }

    res.status(200).json({ success: true, data: organization });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete an organization (and its associated teams/creators)
// @route   DELETE /api/organizations/:orgId
export const deleteOrganization = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const orgId = req.params.orgId;

    const organization = await Organization.findById(orgId).session(session);
    if (!organization) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }

    // Delete associated teams and creators
    await Team.deleteMany({ organization: orgId }).session(session);
    await Creator.deleteMany({ organization: orgId }).session(session);

    // Delete the organization itself
    await organization.deleteOne({ session });

    await session.commitTransaction();
    session.endSession();

    res
      .status(200)
      .json({
        success: true,
        message: "Organization and all associated data deleted",
      });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ success: false, message: error.message });
  }
};
