import mongoose from 'mongoose';
import moment from 'moment';

const cashierSchema = new mongoose.Schema(
  {
    idTag: String,
    openedAt: {
      // This should be date + time
      // not required since its automatic
      type: String,
    },
    beginning_of_day: {
      type: Number,
      required: true,
    },
    end_of_day: {
      type: String,
      required: true,
    },
    closedAt: {
      type: String,
    },
    employee_id: String,
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

const Cashier = mongoose.model('Cashier', cashierSchema);

export default Cashier;
