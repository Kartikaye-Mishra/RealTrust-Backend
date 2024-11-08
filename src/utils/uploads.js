import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

const removeFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) console.error('Failed to delete local image:', err);
    });
};

export { upload, removeFile };
