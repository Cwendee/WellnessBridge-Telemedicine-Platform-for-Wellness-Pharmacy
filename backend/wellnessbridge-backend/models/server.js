const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');

const app = express();
const PORT = 4000; // or any port you prefer

app.use(express.json()); // For parsing application/json

// Create a new doctor
app.post('/doctors', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all doctors
app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a doctor by ID
app.get('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a doctor by ID
app.patch('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a doctor by ID
app.delete('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));

