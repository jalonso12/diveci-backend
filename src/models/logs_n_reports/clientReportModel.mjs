import mongoose from 'mongoose';
import moment from 'moment';

const clientReportSchema = new mongoose.Schema(
  {
    client_id: {
      type: String,
      requried: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    date_of_purchase: {
      type: String,
      required: true,
    },
    madeReservation: {
      type: Boolean,
      default: false,
    },
    restaurant_id: {
      // MUST BE CHANGED TO TARGET RESTAURANTS SCHEMA
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

const ClientReport = mongoose.model('ClientReport', clientReportSchema);

export default ClientReport;
