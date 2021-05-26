const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './config.env' });

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
