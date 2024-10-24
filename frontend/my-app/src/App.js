import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [hmos, setHmos] = useState([]);
  const [medications, setMedications] = useState([]);
  const [users, setUsers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [healthRecords, setHealthRecords] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from the various endpoints
  useEffect(() => {
    const endpoints = [
      { url: 'http://172.18.232.109:4000/api/contacts', setter: setContacts },
      { url: 'http://172.18.232.109:4000/api/appointments', setter: setAppointments },
      { url: 'http://172.18.232.109:4000/api/doctors', setter: setDoctors },
      { url: 'http://172.18.232.109:4000/api/hmos', setter: setHmos },
      { url: 'http://172.18.232.109:4000/api/medications', setter: setMedications },
      { url: 'http://172.18.232.109:4000/api/users', setter: setUsers },
      { url: 'http://172.18.232.109:4000/api/feedback', setter: setFeedback },
      { url: 'http://172.18.232.109:4000/api/healthRecords', setter: setHealthRecords },
      { url: 'http://172.18.232.109:4000/api/patients', setter: setPatients },
    ];

    Promise.all(
      endpoints.map((endpoint) =>
        fetch(endpoint.url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => endpoint.setter(data))
          .catch((err) => {
            console.error('Error fetching data:', err);
            setError(err.message);
          })
      )
    ).finally(() => setLoading(false)); // Set loading to false after all requests
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div> {/* Spinner for loading */}
        <p>Loading data, please wait...</p> {/* Informative loading message */}
      </div>
    );
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to WellnessBridge</h1>
        <p>This is your telemedicine platform for wellness and pharmacy.</p>
        <p>
          Our mission is to connect patients with healthcare providers and enhance the quality of
          care.
        </p>
        <p>
          Through our platform, you can easily schedule appointments, consult with healthcare
          professionals, and access a variety of health services.
        </p>

        {/* Displaying data from each endpoint */}
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.contactId}>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {typeof contact.email === 'object' ? JSON.stringify(contact.email) : contact.email}</p>
              <p><strong>Phone:</strong> {typeof contact.phone === 'object' ? JSON.stringify(contact.phone) : contact.phone}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p><strong>Date:</strong> {contact.date}</p>
            </li>
          ))}
        </ul>

        <h2>Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.appointmentId}>
              <p><strong>Appointment ID:</strong> {appointment.appointmentId}</p>
              <p><strong>Patient ID:</strong> {appointment.patientId}</p>
              <p><strong>Doctor ID:</strong> {appointment.doctorId}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Status:</strong> {appointment.status}</p>
              <p><strong>Reason:</strong> {appointment.reason}</p>
              <p><strong>Notes:</strong> {appointment.notes}</p>
            </li>
          ))}
        </ul>

        <h2>Doctors</h2>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.doctorId}>
              <p><strong>Name:</strong> {doctor.name}</p>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Contact:</strong> {typeof doctor.contact === 'object' ? JSON.stringify(doctor.contact) : doctor.contact}</p>
            </li>
          ))}
        </ul>

        <h2>HMOs</h2>
        <ul>
          {hmos.map((hmo) => (
            <li key={hmo.hmoId}>
              <p><strong>Name:</strong> {hmo.name}</p>
              <p><strong>Plan:</strong> {hmo.plan}</p>
            </li>
          ))}
        </ul>

        <h2>Medications</h2>
        <ul>
          {medications.map((medication) => (
            <li key={medication.medicationId}>
              <p><strong>Medication:</strong> {medication.name}</p>
              <p><strong>Dosage:</strong> {medication.dosage}</p>
              <p><strong>Instructions:</strong> {medication.instructions}</p>
            </li>
          ))}
        </ul>

        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>

        <h2>Feedback</h2>
        <ul>
          {feedback.map((feed) => (
            <li key={feed.feedbackId}>
              <p><strong>User:</strong> {feed.userId}</p>
              <p><strong>Message:</strong> {feed.message}</p>
            </li>
          ))}
        </ul>

        <h2>Health Records</h2>
        <ul>
          {healthRecords.map((record) => (
            <li key={record.recordId}>
              <p><strong>Patient ID:</strong> {record.patientId}</p>
              <p><strong>Doctor ID:</strong> {record.doctorId}</p>
              <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
            </li>
          ))}
        </ul>

        <h2>Patients</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.patientId}>
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Contact:</strong> {typeof patient.contact === 'object' ? JSON.stringify(patient.contact) : patient.contact}</p>
              <p><strong>Medical History:</strong> {typeof patient.medicalHistory === 'object' ? JSON.stringify(patient.medicalHistory) : patient.medicalHistory}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

