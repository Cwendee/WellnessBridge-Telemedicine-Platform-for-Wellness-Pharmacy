// models/HealthRecord.js
const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    doctorNotes: {
        type: String,
        required: true,
    },
    prescriptions: [{
        medication: String,
        dosage: String,
        instructions: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
module.exports = HealthRecord;

