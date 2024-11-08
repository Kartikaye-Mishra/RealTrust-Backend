import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const authenticateAdminToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, process.env.JWT_SECRET, async (err, admin) => {
        if (err) return res.status(403).send('Invalid token');
        req.admin = await Admin.findById(admin.id).select('-password');
        next();
    });
};