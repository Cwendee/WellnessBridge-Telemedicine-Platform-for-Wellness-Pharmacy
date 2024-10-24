const express = require('express');
const HealthRecord = require('../models/HealthRecord');

const router = express.Router();

// Get all health records
router.get('/', async (req, res) => {
    try {
        const records = await HealthRecord.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching health records' });
    }
});

// Get a specific health record by ID
router.get('/:id', async (req, res) => {
    try {
        const record = await HealthRecord.findById(req.params.id);
        if (!record) return res.status(404).json({ message: 'Health record not found' });
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching health record' });
    }
});

// Create a new health record
router.post('/', async (req, res) => {
    const record = new HealthRecord(req.body);
    try {
        const savedRecord = await record.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        res.status(400).json({ message: 'Error saving health record' });
    }
});

// Update an existing health record
router.put('/:id', async (req, res) => {
    try {
        const updatedRecord = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecord) return res.status(404).json({ message: 'Health record not found' });
        res.json(updatedRecord);
    } catch (error) {
        res.status(400).json({ message: 'Error updating health record' });
    }
});

// Delete a health record
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
        if (!deletedRecord) return res.status(404).json({ message: 'Health record not found' });
        res.json({ message: 'Health record deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting health record' });
    }
});

module.exports = router;

