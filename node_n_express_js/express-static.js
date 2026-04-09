const express = require('express');
const app = express();
const port = 8012;

// Serve static HTML files from 'public-pages'
app.use(express.static('public-pages'));

// Optional: catch-all 404 for other routes
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
