import mongoose from 'mongoose';
import moment from 'moment';

const restaurantSchema = new mongoose.Schema(
  {
    idTag: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
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

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
