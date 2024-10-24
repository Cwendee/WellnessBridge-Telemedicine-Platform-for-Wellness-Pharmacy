// models/HMO.js
const mongoose = require('mongoose');

const hmoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        phone: String,
        email: String,
    },
    address: String,
    servicesCovered: [String], // List of services covered by the HMO
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const HMO = mongoose.model('HMO', hmoSchema);
module.exports = HMO;

