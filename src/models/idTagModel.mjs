import mongoose from 'mongoose';
import { encryptText, decryptText } from '../utils/encryptor.mjs';

const prefixes = [
  'TEC-',
  'CVZ-',
  'CJS-',
  'FAC-',
  'CLI-',
  'P-',
  'LH-',
  'L-',
  'LOG-',
  'COM-',
  'B-',
  'DE-',
  'PRO-',
  'PPO-',
  'RES-',
  'ROL-',
  'ME-',
  'EU-',
  'USU-',
  'VN-',
];

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
        values: prefixes,
        message: 'Please enter a valid prefix',
      },
    },
  },
  {
    timestamps: true,
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

// CREATE METHOD THAT WILL RUN AT CREATE
// IN ORDER TO ASSIGN THE CORRECT VALUE TO THE IDTAG

const IdTag = mongoose.model('IdTag', idTagSchema);

export default IdTag;
