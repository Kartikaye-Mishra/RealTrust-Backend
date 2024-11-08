import express from 'express';
import { getContacts, addContact } from '../controllers/contactController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateAdminToken, getContacts);
router.post('/', addContact);

export default router;
