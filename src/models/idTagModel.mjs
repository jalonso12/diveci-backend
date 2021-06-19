import mongoose from 'mongoose';
import moment from 'moment';
import { encryptText, decryptText } from '../utils/encryptor.mjs';

const idTagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 12,
      select: false,
    },
    // Is pretty much unnecessary to ask this...
    // hasPrefix: {
    //   type: Boolean,
    //   required: true,
    //   default: true,
    // },
    prefix: {
      type: String,
      enum: {
        values: [
          'CLI-',
          'PE-',
          'PRO-',
          'PU-',
          'EVE-',
          'USU-',
          'UM-',
          'P-',
          'M-',
          'COM-',
          'DE-',
          'EU-',
          'LH-',
          'TEC-',
          'RES-',
          'BUF-',
          'ESP-',
          'BC-',
          'BH-',
          'BG-',
          'L-',
          'V-',
          'EMP-',
          'ME-',
          'LOG-',
          'FAC-',
          'ROL-',
        ],
        message: 'Please enter a valid prefix',
      },
      select: false,
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

idTagSchema.pre('save', function (next) {
  this.type = encryptText(this.type);
  this.description = encryptText(this.description);

  next();
});

idTagSchema.post('init', function () {
  this.type = decryptText(this.type);
  this.description = decryptText(this.description);
});

const IdTag = mongoose.model('IdTag', idTagSchema);

export default IdTag;
