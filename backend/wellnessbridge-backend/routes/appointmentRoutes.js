// routes/appointmentRoutes.js

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Adjust path as necessary

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
});

// Create a new appointment
router.post('/', async (req, res) => {
    const appointment = new Appointment(req.body);
    try {
        const savedAppointment = await appointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        res.status(400).json({ message: 'Error saving appointment' });
    }
});

// Other CRUD operations (GET by ID, PUT, DELETE) would follow a similar pattern

module.exports = router;

