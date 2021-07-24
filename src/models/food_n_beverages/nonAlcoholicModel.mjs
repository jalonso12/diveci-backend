import mongoose from 'mongoose';
import moment from 'moment';

const nonAlcoholicSchema = new mongoose.Schema(
  {
    idTag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    isHot: {
      type: Boolean,
      default: false,
    },
    isSoda: {
      type: Boolean,
      default: false,
    },
    ingredients: {
      type: String,
      default: 'Do not apply',
    },
    country_id: {
      type: String,
    },
    quantity: {
      type: String,
      required: true,
    },
    priceTap: {
      type: Number,
      required: true,
    },
    priceCan: {
      type: Number,
      required: true,
    },
    image: {
      // Change if necessry
      type: String,
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

const NonAlcoholic = mongoose.model('NonAlcoholic', nonAlcoholicSchema);

export default NonAlcoholic;
