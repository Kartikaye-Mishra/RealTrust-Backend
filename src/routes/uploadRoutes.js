import express from 'express';
import {upload} from '../utils/uploads.js';
import { uploadImage } from '../controllers/uploadController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateAdminToken, upload.single('image'), uploadImage);

export default router;
