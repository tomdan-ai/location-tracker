// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define middleware
app.use(express.json()); // Parse JSON request bodies

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000; // Use the provided port or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
