// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    healthRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HealthRecord', // Reference to the HealthRecord model
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

