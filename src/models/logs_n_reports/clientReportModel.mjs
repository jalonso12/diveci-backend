import mongoose from 'mongoose';

const clientReportSchema = new mongoose.Schema({
  clientIdTag: {
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
    type: Date,
    required: true,
  },
  madeReservation: {
    type: Boolean,
    default: false,
  },
  usedBar: {
    type: Boolean,
    default: false,
  },
  restaurant: {
    // MUST BE CHANGED TO TARGET RESTAURANTS SCHEMA
    type: String,
  },
});

const ClientReport = mongoose.model('ClientReport', clientReportSchema);

export default ClientReport;
