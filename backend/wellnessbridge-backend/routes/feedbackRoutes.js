const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Get all feedback submissions
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback submissions' });
    }
});

// Submit feedback
router.post('/', async (req, res) => {
    const feedback = new Feedback(req.body);
    try {
        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(400).json({ message: 'Error saving feedback submission' });
    }
});

module.exports = router;

