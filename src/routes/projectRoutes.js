import express from 'express';
import { addProject, getProjects, updateProject, deleteProject } from '../controllers/projectController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';
import {upload} from '../utils/uploads.js';

const router = express.Router();

router.post('/', authenticateAdminToken, upload.single('image'), addProject); // Updated route to handle image upload
router.get('/', getProjects);
router.put('/:id', authenticateAdminToken, updateProject);
router.delete('/:id', authenticateAdminToken, deleteProject);

export default router;
