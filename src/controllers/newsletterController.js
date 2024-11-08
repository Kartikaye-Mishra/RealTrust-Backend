import Newsletter from '../models/Newsletter.js';

export const getNewsletterSubscribers = async (req, res) => {
    try {
        const subscribers = await Newsletter.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const subscribeNewsletter = async (req, res) => {
    try {
        const { email } = req.body;
        const newSubscriber = new Newsletter({ email });
        await newSubscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
