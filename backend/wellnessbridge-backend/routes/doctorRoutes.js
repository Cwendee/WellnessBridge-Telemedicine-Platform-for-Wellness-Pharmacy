const express = require('express');
const Doctor = require('../models/Doctor');

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors' });
    }
});

// Get a specific doctor by ID
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor' });
    }
});

// Create a new doctor
router.post('/', async (req, res) => {
    const doctor = new Doctor(req.body);
    try {
        const savedDoctor = await doctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(400).json({ message: 'Error saving doctor' });
    }
});

// Update an existing doctor
router.put('/:id', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: 'Error updating doctor' });
    }
});

// Delete a doctor
router.delete('/:id', async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting doctor' });
    }
});

module.exports = router;

