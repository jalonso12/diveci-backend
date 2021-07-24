import mongoose from 'mongoose';
import moment from 'moment';

const providerSchema = new mongoose.Schema(
  {
    idTag: {
      // Not Required because it must be set automatically
      type: String,
    },
    agentName: {
      type: String,
      required: true,
    },
    agentLastname: {
      type: String,
      required: true,
    },
    agentPhone: {
      type: Number,
      required: true,
    },
    agentEmail: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyPhone: {
      type: Number,
      required: true,
    },
    companyEmail: {
      type: String,
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

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
