// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
    const { name, email, feedback, rating } = req.body;

    try {
        const newFeedback = new Feedback({
            name,
            email,
            feedback,
            rating
        });

        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting feedback' });
    }
};
