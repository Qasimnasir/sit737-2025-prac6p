const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes Node.js App!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const server = app.listen(PORT, '0.0.0.0', () => { // Listen on all interfaces
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});