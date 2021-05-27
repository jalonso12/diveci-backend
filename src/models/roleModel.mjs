import moment from 'moment';
import mongoose from 'mongoose';
import { decryptText, encryptText } from '../utils/encryptor.mjs';

const roleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'To create a new role a title is requried'],
    },
    description: {
      type: String,
      required: [true, 'Please describe this role'],
    },
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamps: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

roleSchema.pre('save', function (next) {
  this.title = encryptText(this.title);
  this.description = encryptText(this.description);

  next();
});

roleSchema.post('init', function () {
  this.title = decryptText(this.title);
  this.description = decryptText(this.description);
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
