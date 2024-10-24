const express = require('express');
const Patient = require('../models/Patient');

const router = express.Router();

// Get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patients' });
    }
});

// Get a specific patient by ID
router.get('/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient' });
    }
});

// Create a new patient
router.post('/', async (req, res) => {
    const patient = new Patient(req.body);
    try {
        const savedPatient = await patient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error saving patient' });
    }
});

// Update an existing patient
router.put('/:id', async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error updating patient' });
    }
});

// Delete a patient
router.delete('/:id', async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json({ message: 'Patient deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting patient' });
    }
});

module.exports = router;

