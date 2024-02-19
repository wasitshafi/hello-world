require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5200;

// const cors = require('cors');
// app.use(cors());

app.get('/', (req, res) => {
	res.json({ msg: 'Hello World from Nginx/Apache HTTP Server' });
});

app.get('/api/about', (req, res) => {
	res.json({
		about:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
	});
});

app.listen(PORT, () => {
	console.log('Server started on port', PORT);
});
