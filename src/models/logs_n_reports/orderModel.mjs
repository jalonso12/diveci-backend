import mongoose from 'mongoose';
import moment from 'moment';

const checkSchema = new mongoose.Schema(
  {
    idTag: {
      type: String,
      required: true,
    },
    beverage_id: String,
    meal_id: String,
    table_id: String,
    priceTotal: {
      type: Number,
      required: true,
    },
    client_id: {
      // Could be nullable if client is not inside the db
      type: String,
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

const Check = mongoose.model('Check', checkSchema);

export default Check;
