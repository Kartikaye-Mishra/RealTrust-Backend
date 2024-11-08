import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Authenticate admin and get token
export const authAdmin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401).send('Invalid email or password');
    }
};

// Register new admin (for initial setup)
export const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
        res.status(400).send('Admin already exists');
    } else {
        const admin = await Admin.create({
            name,
            email,
            password,
        });

        if (admin) {
            res.status(201).json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(400).send('Invalid admin data');
        }
    }
};
