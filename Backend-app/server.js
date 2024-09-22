const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: 'ananya_rohatgi_14102002',
      email: 'ananyarohatgi@gmail.com',
      roll_number: 'RA2111026030016',
      numbers: [],
      alphabets: [],
      highest_alphabet: []
    });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');

  const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

  res.json({
    is_success: true,
    user_id: 'ananya_rohatgi_14102002',
    email: 'ananyarohatgi@gmail.com',
    roll_number: 'RA2111026030016',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
