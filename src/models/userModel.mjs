import argon2 from 'argon2';
import moment from 'moment';
import mongoose from 'mongoose';
import { decryptText, encryptText } from '../utils/encryptor.mjs';

const userSchema = new mongoose.Schema(
  {
    idTag: {
      // Not Required because it must be set automatically
      type: String,
    },
    username: {
      type: String,
      minLength: 8,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    firstLastname: {
      type: String,
      required: true,
    },
    secondLastname: {
      type: String,
      required: true,
    },
    // Create custom validator for phone number
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [
        true,
        'Password required and must be of at least 8 characters',
      ],
      minLength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [
        true,
        'Passwords are not matching, please be sure to type it exactly the same.',
      ],
      validate: {
        validator(el) {
          return el === this.password;
        },
        message: 'Passwords do not match',
      },
      select: false,
    },
    role_id: {
      type: String,
      required: true,
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

userSchema.pre('save', async function (next) {
  this.username = encryptText(this.username);
  this.name = encryptText(this.name);
  this.firstLastname = encryptText(this.firstLastname);
  this.secondLastname = encryptText(this.secondLastname);
  this.phone = encryptText(this.phone);
  this.password = await argon2.hash(this.password);
  this.confirmPassword = undefined;

  next();
});

userSchema.post('init', function () {
  this.username = decryptText(this.username);
  this.name = decryptText(this.name);
  this.firstLastname = decryptText(this.firstLastname);
  this.secondLastname = decryptText(this.secondLastname);
  this.phone = decryptText(this.phone);
});

userSchema.methods.correctPassword = function (savedPassword, inputPassword) {
  return argon2.verify(savedPassword, inputPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
