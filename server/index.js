const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Default route to check if server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Example API endpoint (modify as needed)
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  res.json({ message: `User ${name} registered successfully!` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});