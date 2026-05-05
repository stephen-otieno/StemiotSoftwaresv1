const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error: Could not fetch projects" });
  }
};

// @desc    Create a new project
// @route   POST /api/projects
const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Error: Could not add project" });
  }
};

module.exports = { getProjects, createProject };