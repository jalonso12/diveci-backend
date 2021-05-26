const dotenv = require('dotenv');
const express = require('express');
const moment = require('moment');

dotenv.config({ path: './config.env' });

const Role = require('./src/models/roleModels');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------------- ENDPOINT -----------------------------
//
// CREATE ROLE
app.post('/admin/new-role', async (req, res) => {
  const newRole = await Role.create({
    title: req.body.title,
    createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
  });

  res.status(200).json({
    status: 'success',
    data: {
      data: newRole,
    },
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
