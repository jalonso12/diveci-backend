import mongoose from 'mongoose';
import moment from 'moment';

const tablewareSchema = new mongoose.Schema(
  {
    idTag: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: {
        values: ['Cutlery', 'Crockery'],
        message: 'Please assign type crockery or cutlery to item',
      },
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
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
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

const Tableware = mongoose.model('Tableware', tablewareSchema);

export default Tableware;
