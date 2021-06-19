import mongoose from 'mongoose';
import moment from 'moment';

const billingSchema = new mongoose.Schema(
  {
    cashier_id: String,
    // Must retrieve the total income of that day
    createdAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Billing = mongoose.model('Billing', billingSchema);

export default Billing;
