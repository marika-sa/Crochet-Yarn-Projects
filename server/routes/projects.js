import express from "express";
const router = express.Router();
import Project from "../models/Project.js";

// Getting ALL projects
router.get("/", async (req, res) => {
    try {
        const { search, status } = req.query;
        const query = {};
        if (status) query.status = status;
        if (search) query.title = { $regex: search, $options: "i" };
        const projects = await Project.find(query).sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single project
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found." });
        res.json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add new project
router.post("/", async (req, res) => {
    try {
        const project = new Project(req.body);
        const saved = await project.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Edit/update exisiting project
router.put("/:id", async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) returnres.status(404).json({ message: "Not found." });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete existing project
router.delete("/:id", async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted successfully." });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;