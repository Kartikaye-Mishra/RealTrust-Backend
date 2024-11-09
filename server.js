import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import projectRoutes from './src/routes/projectRoutes.js';
import clientRoutes from './src/routes/clientRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
import newsletterRoutes from './src/routes/newsletterRoutes.js';
import uploadRoutes from './src/routes/uploadRoutes.js';

dotenv.config();

// Get directory name in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration to allow only the frontend URL
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://realtrust-backend.onrender.com',
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/newsletter', newsletterRoutes); // Add newsletter routes
app.use('/api/uploads', uploadRoutes); // Add this route

// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
