import express from 'express';
import { getNewsletterSubscribers, subscribeNewsletter } from '../controllers/newsletterController.js';
import { authenticateAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateAdminToken, getNewsletterSubscribers);
router.post('/', subscribeNewsletter);

export default router;
