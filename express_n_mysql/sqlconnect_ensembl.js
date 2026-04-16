const fs = require('fs');
const mysql = require("mysql2");
const express = require("express");
const app = express();

// read password from file
const dbPassword = fs.readFileSync("db_password.txt","utf-8").trim();

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "pythonuser",
    password: dbPassword,
    database: "ensembl_local"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected.....");
});

app.get('/gene', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Provide stable id like /gene?name=ENSGXXXXXXXXX');
    }

    const sql = `
    SELECT g.*, sr.name AS chromosome
    FROM gene g
    JOIN seq_region sr ON g.seq_region_id = sr.seq_region_id
    WHERE g.stable_id LIKE ?
  `;

    db.query(sql, [`%${name}%`], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Start server
app.listen(8012, () => {
    console.log("Server running on http://localhost:8012");
});
