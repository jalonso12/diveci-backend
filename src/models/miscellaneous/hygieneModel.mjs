import mongoose from 'mongoose';
import moment from 'moment';

const hygieneSchema = new mongoose.Schema(
  {
    idTag: String,
    product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    restaurant_id: String,
    createdAt: String,
    upadtedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Hygiene = mongoose.model('Hygiene', hygieneSchema);

export default Hygiene;
