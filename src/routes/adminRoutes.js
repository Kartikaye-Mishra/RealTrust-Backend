import express from 'express';
import { authAdmin, registerAdmin } from '../controllers/adminController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authAdmin); // Public login route
// router.post('/register', authenticateAdminToken, registerAdmin); // Protected register route (only for initial setup)
router.post('/register', registerAdmin); // Protected register route (only for initial setup)

export default router;
