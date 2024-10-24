require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Ensure express is required
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Require body-parser for parsing JSON requests

// Importing routes
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const hmoRoutes = require('./routes/hmoRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const patientRoutes = require('./routes/patientRoutes');
const healthRecordRoutes = require('./routes/healthRecordRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Log MongoDB URI
const mongoURI = process.env.MONGO_URI;
console.log('MongoDB URI:', mongoURI); // Log the URI to verify it's being read correctly

// MongoDB connection
mongoose.connect(mongoURI, { // Use environment variable for MongoDB URI
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to WellnessBridge</h1>
        <p>WellnessBridge is a telemedicine platform dedicated to providing accessible healthcare services.</p>
        <p>Our mission is to connect patients with healthcare providers to enhance the quality of care.</p>
        <p>Through our platform, you can easily schedule appointments, consult with healthcare professionals, and access various health resources.</p>
        <p>Join us on the journey to better health and wellness!</p>
    `);
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/hmos', hmoRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/healthrecords', healthRecordRoutes);

// Start the server
const PORT = process.env.PORT || 4000; // Use environment variable for PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

