const express = require('express');
const Contact = require('../models/ContactUs');

const router = express.Router();

// Get all contact submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact submissions' });
    }
});

// Submit a contact form
router.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    try {
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: 'Error saving contact submission' });
    }
});

module.exports = router;

