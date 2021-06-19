import mongoose from 'mongoose';
import moment from 'moment';

const packagingSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    isGreen: {
      type: Boolean,
      default: true,
    },
    priceGreen: {
      type: Number,
      dafault: 0,
      required: true,
    },
    pricePollute: {
      type: Number,
      default: 0,
      required: true,
    },
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

const Packaging = mongoose.model('Packaging', packagingSchema);

export default Packaging;
