const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    experience: {
        type: Number, // Years of experience
        required: true,
    },
    contact: {
        phone: String,
        email: String,
    },
    profilePicture: String, // URL to profile picture
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the Doctor model
module.exports = mongoose.model('Doctor', doctorSchema);

