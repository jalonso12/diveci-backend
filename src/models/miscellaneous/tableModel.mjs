import mongoose from 'mongoose';
import moment from 'moment';

const tableSchema = new mongoose.Schema(
  {
    idTag: String,
    capacity: {
      type: Number,
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

const Table = mongoose.model('Table', tableSchema);

export default Table;
