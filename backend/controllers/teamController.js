import Team from "../models/Team.js";
import Organization from "../models/Organization.js";

// @desc    Create a team for a specific organization
// @route   POST /api/organizations/:orgId/teams
export const createTeam = async (req, res) => {
  try {
    const orgId = req.params.orgId;
    const organization = await Organization.findById(orgId);

    if (!organization) {
      return res
        .status(404)
        .json({ success: false, message: "Organization not found" });
    }

    // Add the organization's ID to the team data before creating
    const teamData = { ...req.body, organization: orgId };
    const team = await Team.create(teamData);

    // Add the new team's ID to the organization's list of teams
    organization.participatingTeams.push(team._id);
    await organization.save();

    res.status(201).json({ success: true, data: team });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all teams for a specific organization
// @route   GET /api/organizations/:orgId/teams
export const getTeamsForOrganization = async (req, res) => {
  try {
    const teams = await Team.find({ organization: req.params.orgId });
    res.status(200).json({ success: true, count: teams.length, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all teams globally
// @route   GET /api/teams
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("organization", "name logoUrl"); // Populate org info
    res.status(200).json({ success: true, count: teams.length, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get a single team by ID
// @route   GET /api/teams/:teamId
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId).populate(
      "organization",
      "name"
    );
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a team
// @route   PATCH /api/teams/:teamId
export const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.teamId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a team
// @route   DELETE /api/teams/:teamId
export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    // Remove the team reference from the parent organization
    await Organization.findByIdAndUpdate(team.organization, {
      $pull: { participatingTeams: team._id },
    });

    await team.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add a player to a team
// @route   POST /api/teams/:teamId/players
export const addPlayerToTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(
      req.params.teamId,
      { $push: { players: req.body } }, // Use $push to add to the players array
      { new: true, runValidators: true }
    );

    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Remove a player from a team
// @route   DELETE /api/teams/:teamId/players/:playerId
export const removePlayerFromTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(
      req.params.teamId,
      { $pull: { players: { _id: req.params.playerId } } }, // Use $pull to remove by _id
      { new: true }
    );

    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
