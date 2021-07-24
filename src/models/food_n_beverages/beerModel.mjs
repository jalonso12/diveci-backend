import mongoose from 'mongoose';
import moment from 'moment';

const beerSchema = new mongoose.Schema(
  {
    idTag: String,
    name: {
      type: String,
      required: true,
    },
    brewery: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    isTap: {
      type: Boolean,
      default: false,
    },
    ibu: {
      type: Number,
      required: true,
    },
    vol: {
      type: Number,
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
    // Make sure validation for one filled is made on the front-end
    priceTap: {
      type: Number,
      default: 0,
    },
    priceBottle: {
      type: Number,
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

const Beer = mongoose.model('Beer', beerSchema);

export default Beer;
