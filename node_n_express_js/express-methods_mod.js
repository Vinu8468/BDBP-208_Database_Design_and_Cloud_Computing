const express = require('express');
const path = require('path');
const app = express();
const port = 8012;

// GET root 
app.get('/',(req,res) => {
	res.send('GET request to the homepage');
});

// POST root
app.post('/',(req,res) => {
	res.send('POST request to the homepage');
});

// GET /about => serve HTML
app.get('/about',(req,res) =>{
	res.sendFile(path.join(__dirname,'aboutme.html'));
});

// catch all 404 errors
app.use((req,res)=>{
	res.status(404).send('404-Page not found');
});

//starting the server
app.listen(port,() =>{
	console.log(`Example app listening at http://localhost:${port}`);
});

