import Client from '../models/Client.js';
import cloudinary from '../utils/cloudinary.js'
import { removeFile } from '../utils/uploads.js';

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
export const addClient = async (req, res) => {
    const { name, description, designation } = req.body;

    try {
        let imageUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
            removeFile(req.file.path); // Remove local file
        }

        const newClient = new Client({
            name,
            description,
            designation,
            image: imageUrl,
        });

        await newClient.save();
        res.status(201).json(newClient);
    } catch (err) {
        console.error('Error creating client:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};


export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedClient);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        await Client.findByIdAndDelete(id);
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
