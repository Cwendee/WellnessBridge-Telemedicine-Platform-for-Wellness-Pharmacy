import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [route, setRoute] = useState('');

  const fetchData = (endpoint) => {
    fetch(`http://172.18.232.109:4000/api/${endpoint}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to WellnessBridge React App!</h1>
        <div>
          <button onClick={() => { setRoute('appointments'); fetchData('appointments'); }}>Appointments</button>
          <button onClick={() => { setRoute('doctors'); fetchData('doctors'); }}>Doctors</button>
          <button onClick={() => { setRoute('hmos'); fetchData('hmos'); }}>HMO</button>
          <button onClick={() => { setRoute('medications'); fetchData('medications'); }}>Medications</button>
          <button onClick={() => { setRoute('users'); fetchData('users'); }}>Users</button>
          <button onClick={() => { setRoute('contacts'); fetchData('contacts'); }}>Contacts</button>
          <button onClick={() => { setRoute('feedback'); fetchData('feedback'); }}>Feedback</button>
          <button onClick={() => { setRoute('healthRecords'); fetchData('healthRecords'); }}>Health Records</button>
          <button onClick={() => { setRoute('patients'); fetchData('patients'); }}>Patients</button>
        </div>

        <h2>{route.charAt(0).toUpperCase() + route.slice(1)} Data:</h2>
        {data.length ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{JSON.stringify(item)}</li> // Adjust this according to your data structure
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </header>
    </div>
  );
}

export default App;

