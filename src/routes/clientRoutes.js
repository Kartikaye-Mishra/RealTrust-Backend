import express from 'express';
import { addClient, getClients, updateClient, deleteClient } from '../controllers/clientController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';
import { upload } from '../utils/uploads.js';

const router = express.Router();

router.post('/', authenticateAdminToken, upload.single('image'), addClient);
router.get('/', getClients);
router.put('/:id', authenticateAdminToken, updateClient);
router.delete('/:id', authenticateAdminToken, deleteClient);

export default router;
