const express = require('express');
const Medication = require('../models/Medication');

const router = express.Router();

// Get all medications
router.get('/', async (req, res) => {
    try {
        const medications = await Medication.find();
        res.json(medications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medications' });
    }
});

// Get a specific medication by ID
router.get('/:id', async (req, res) => {
    try {
        const medication = await Medication.findById(req.params.id);
        if (!medication) return res.status(404).json({ message: 'Medication not found' });
        res.json(medication);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medication' });
    }
});

// Create a new medication
router.post('/', async (req, res) => {
    const medication = new Medication(req.body);
    try {
        const savedMedication = await medication.save();
        res.status(201).json(savedMedication);
    } catch (error) {
        res.status(400).json({ message: 'Error saving medication' });
    }
});

// Update an existing medication
router.put('/:id', async (req, res) => {
    try {
        const updatedMedication = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMedication) return res.status(404).json({ message: 'Medication not found' });
        res.json(updatedMedication);
    } catch (error) {
        res.status(400).json({ message: 'Error updating medication' });
    }
});

// Delete a medication
router.delete('/:id', async (req, res) => {
    try {
        const deletedMedication = await Medication.findByIdAndDelete(req.params.id);
        if (!deletedMedication) return res.status(404).json({ message: 'Medication not found' });
        res.json({ message: 'Medication deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting medication' });
    }
});

module.exports = router;

