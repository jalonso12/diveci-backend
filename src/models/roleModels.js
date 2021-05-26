const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'To create a new role a title is requried'],
  },
  createdAt: {
    type: String,
    required: true,
    select: false,
  },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
