import mongoose from 'mongoose';
import moment from 'moment';

const provProductsSchema = new mongoose.Schema(
  {
    provider_id: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    price: {
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

const ProvProducts = mongoose.model('ProvProducts', provProductsSchema);

export default ProvProducts;
