import mongoose from 'mongoose';
import moment from 'moment';

const wineSchema = new mongoose.Schema(
  {
    idTag: String,
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    vol: {
      type: Number,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    priceGlass: {
      type: Number,
    },
    priceBottle: {
      type: Number,
      required: true,
    },
    image: String,
    restaurant_id: String,
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Wine = mongoose.model('Wine', wineSchema);

export default Wine;
