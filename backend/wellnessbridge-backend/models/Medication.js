// models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dosage: {
        type: String,
        required: true,
    },
    sideEffects: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;

