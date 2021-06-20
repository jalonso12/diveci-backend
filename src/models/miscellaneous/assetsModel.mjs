import mongoose from 'mongoose';
import moment from 'moment';

const assetsSchema = new mongoose.Schema(
  {
    idTag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    restaurant_id: {
      type: String,
      // Should be a dropdown
      enum: {
        values: ['RES-12', 'RES-13', 'RES-14'],
        message: 'Please assign the item to a restaurant',
      },
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Assets = mongoose.model('Assets', assetsSchema);

export default Assets;
