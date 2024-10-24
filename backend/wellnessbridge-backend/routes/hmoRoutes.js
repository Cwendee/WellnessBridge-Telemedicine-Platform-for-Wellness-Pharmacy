const express = require('express');
const HMO = require('../models/HMO');

const router = express.Router();

// Get all HMOs
router.get('/', async (req, res) => {
    try {
        const hmos = await HMO.find();
        res.json(hmos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching HMOs' });
    }
});

// Get a specific HMO by ID
router.get('/:id', async (req, res) => {
    try {
        const hmo = await HMO.findById(req.params.id);
        if (!hmo) return res.status(404).json({ message: 'HMO not found' });
        res.json(hmo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching HMO' });
    }
});

// Create a new HMO
router.post('/', async (req, res) => {
    const hmo = new HMO(req.body);
    try {
        const savedHMO = await hmo.save();
        res.status(201).json(savedHMO);
    } catch (error) {
        res.status(400).json({ message: 'Error saving HMO' });
    }
});

// Update an existing HMO
router.put('/:id', async (req, res) => {
    try {
        const updatedHMO = await HMO.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHMO) return res.status(404).json({ message: 'HMO not found' });
        res.json(updatedHMO);
    } catch (error) {
        res.status(400).json({ message: 'Error updating HMO' });
    }
});

// Delete an HMO
router.delete('/:id', async (req, res) => {
    try {
        const deletedHMO = await HMO.findByIdAndDelete(req.params.id);
        if (!deletedHMO) return res.status(404).json({ message: 'HMO not found' });
        res.json({ message: 'HMO deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting HMO' });
    }
});

module.exports = router;

