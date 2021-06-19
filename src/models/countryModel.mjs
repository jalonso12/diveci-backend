import mongoose from 'mongoose';
import moment from 'moment';

const countrySchema = new mongoose.Schema(
  {
    idTag: {
      // Should be automatically assigned.
      type: String,
    },
    // Must be encrypted
    title: {
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

const Country = mongoose.model('Country', countrySchema);

export default Country;
