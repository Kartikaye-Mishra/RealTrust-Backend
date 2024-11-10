import Contact from '../models/Contact.js'
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const addContact = async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;
        const newContact = new Contact({ fullName, email, mobile, city });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        console.log("Error sending contacts", err);
        res.status(500).send('Server Error');
    }
};
