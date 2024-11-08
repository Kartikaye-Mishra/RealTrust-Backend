import Project from '../models/Project.js';
import Client from '../models/Client.js';

export const uploadImage = async (req, res) => {
    const { entityId, entityType } = req.body;
    if (req.file) {
        const imageUrl = `/uploads/${req.file.filename}`;
        try {
            let updatedEntity;
            if (entityType === 'project') {
                updatedEntity = await Project.findByIdAndUpdate(entityId, { image: imageUrl }, { new: true });
            } else if (entityType === 'client') {
                updatedEntity = await Client.findByIdAndUpdate(entityId, { image: imageUrl }, { new: true });
            }
            if (updatedEntity) {
                res.status(201).json({
                    message: 'Image uploaded and entity updated successfully',
                    entity: updatedEntity,
                });
            } else {
                res.status(400).json({ message: 'Invalid entity type or ID' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        res.status(400).json({ message: 'Image upload failed' });
    }
};
