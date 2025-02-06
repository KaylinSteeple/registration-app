import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5001/register', {
        name,
        email,
      });

      // Handle success response
      setMessage(`User ${response.data.name} registered successfully!`);
      setName(''); // Clear input fields
      setEmail('');
    } catch (error) {
      // Handle error response
      setMessage('Error registering user. Try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {message && <p>{message}</p>} {/* Display success/error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;