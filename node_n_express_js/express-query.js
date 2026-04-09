const express = require('express');
const app = express();
const port = 8012;

// Route handling query parameters
app.get('/search', (req, res) => {
    const { qparam1, qparam2 } = req.query; // Extract query params
    res.send(`query param1: ${qparam1 || 'none'}, query param2: ${qparam2 || 'none'}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
