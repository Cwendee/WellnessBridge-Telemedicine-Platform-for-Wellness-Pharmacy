const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000; // Set PORT to 4000 as you specified

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const MONGO_URI = 'mongodb://adminUser:admin%40w3lln3ssph@rm@localhost:27017/wellnessBridge';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Serve JSON data for each endpoint

// Endpoint for Appointments
app.get('/api/appointments', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'appointments.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const appointments = JSON.parse(data);
        res.json(appointments);
    });
});

// Endpoint for Doctors
app.get('/api/doctors', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'doctors.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const doctors = JSON.parse(data);
        res.json(doctors);
    });
});

// Endpoint for HMOs
app.get('/api/hmos', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'hmos.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const hmos = JSON.parse(data);
        res.json(hmos);
    });
});

// Endpoint for Medications
app.get('/api/medications', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'medications.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const medications = JSON.parse(data);
        res.json(medications);
    });
});

// Endpoint for Users
app.get('/api/users', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'users.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const users = JSON.parse(data);
        res.json(users);
    });
});

// Endpoint for Contacts
app.get('/api/contacts', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'contacts.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const contacts = JSON.parse(data);
        res.json(contacts);
    });
});

// Endpoint for Feedback
app.get('/api/feedback', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'feedback.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const feedback = JSON.parse(data);
        res.json(feedback);
    });
});

// Endpoint for Health Records
app.get('/api/healthRecords', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'healthRecords.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const healthRecords = JSON.parse(data);
        res.json(healthRecords);
    });
});

// Endpoint for Patients
app.get('/api/patients', (req, res) => {
    const filePath = path.join(__dirname, 'mockData', 'patients.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        const patients = JSON.parse(data);
        res.json(patients);
    });
});

// Sample route
app.get('/', (req, res) => {
    res.send(`
<h1>Welcome to WellnessBridge</h1>
        <p>This is your telemedicine platform for wellness and pharmacy.</p>
        <p>Our mission is to connect patients with healthcare providers and enhance the quality of care.</p>
        <p>Through our platform, you can easily schedule appointments, consult with healthcare professionals, and access a variety of health services.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

