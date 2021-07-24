import mongoose from 'mongoose';
import moment from 'moment';

const clientSchema = new mongoose.Schema(
  {
    idTag: String,
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    visits: {
      type: Number,
      required: true,
    },
    order_id: String,
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
