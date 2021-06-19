import mongoose from 'mongoose';
import moment from 'moment';

const liquorSchema = new mongoose.Schema(
  {
    idTag: String,
    name: {
      type: String,
      required: true,
    },
    vol: {
      type: String,
      required: true,
    },
    country_id: String,
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    priceGlass: {
      type: Number,
      required: true,
    },
    priceBottle: {
      type: Number,
      required: true,
    },
    restaurant_id: String,
    image: String,
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Liquor = mongoose.model('Liquor', liquorSchema);

export default Liquor;
