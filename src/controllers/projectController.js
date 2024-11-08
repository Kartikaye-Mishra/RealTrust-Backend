import Project from '../models/Project.js';
import cloudinary from '../utils/cloudinary.js';
import { removeFile } from '../utils/uploads.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};



export const addProject = async (req, res) => {
    const { name, description } = req.body;

    try {
        let imageUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
            removeFile(req.file.path); // Remove local file
        }

        const newProject = new Project({
            name,
            description,
            image: imageUrl,
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        console.error('Error creating project:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};



export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProject);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
