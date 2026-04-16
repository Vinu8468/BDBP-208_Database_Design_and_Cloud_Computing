const fs = require('fs');
const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = 8012;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Read password
const dbPassword = fs.readFileSync('db_password.txt', 'utf-8').trim();

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'pythonuser',
    password: dbPassword,
    database: 'library'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});


// =====================
// 1. VIEW ALL STUDENTS
// =====================
app.get('/students', (req, res) => {
    db.query('SELECT * FROM student_info', (err, results) => {
        if (err) return res.status(500).send('Database error');

        let html = `
    <h2>All Students</h2>
    <table border="1" cellpadding="8">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Department</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
    `;

        results.forEach(s => {
            html += `
      <tr>
        <td>${s.student_id}</td>
        <td>${s.student_name}</td>
        <td>${s.department}</td>
        <td>${s.email}</td>
        <td>${new Date(s.DOB).toLocaleDateString()}</td>
      </tr>
      `;
        });

        html += `</table>
    <br><a href="/update-form">Update Student</a>`;

        res.send(html);
    });
});


// =====================
// 2. SEARCH STUDENT
// =====================
app.get('/student', (req, res) => {
    const studentName = req.query.name;

    if (!studentName) {
        return res.status(400).send('Please provide a student name');
    }

    const sql = 'SELECT * FROM student_info WHERE student_name LIKE ?';

    db.query(sql, [`%${studentName}%`], (err, results) => {
        if (err) return res.status(500).send('Database error');

        let html = `
    <h2>Search Results</h2>
    <table border="1" cellpadding="8">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Department</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
    `;

        results.forEach(s => {
            html += `
      <tr>
        <td>${s.student_id}</td>
        <td>${s.student_name}</td>
        <td>${s.department}</td>
        <td>${s.email}</td>
        <td>${new Date(s.DOB).toLocaleDateString()}</td>
      </tr>
      `;
        });

        html += `</table>
    <br><a href="/students">Back</a>`;

        res.send(html);
    });
});


// =====================
// 3. UPDATE FORM (GET)
// =====================
app.get('/update-form', (req, res) => {
    res.send(`
    <h2>Update Student Name</h2>
    <form method="POST" action="/update-student">
      <label>Student ID:</label><br>
      <input type="number" name="id" required><br><br>

      <label>New Name:</label><br>
      <input type="text" name="name" required><br><br>

      <button type="submit">Update</button>
    </form>
    <br><a href="/students">View Students</a>
  `);
});


// =====================
// 4. UPDATE STUDENT (POST)
// =====================
app.post('/update-student', (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).send('ID and Name are required');
    }

    const sql = 'UPDATE student_info SET student_name = ? WHERE student_id = ?';

    db.query(sql, [name, id], (err, result) => {
        if (err) return res.status(500).send('Database error');

        if (result.affectedRows === 0) {
            return res.send('No student found with that ID');
        }

        res.send(`
      <h3>Student Updated Successfully!</h3>
      <p>ID: ${id}</p>
      <p>New Name: ${name}</p>
      <br><a href="/students">View All Students</a>
      <br><a href="/update-form">Update Another</a>
    `);
    });
});


// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});