require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5200;

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
	res.send('<h1>About us</h1>');
});

app.listen(PORT, () => {
	console.log('Server started on port', PORT);
});
