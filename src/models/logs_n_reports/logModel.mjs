import mongoose from 'mongoose';
import moment from 'moment';

const logsSchema = new mongoose.Schema(
  {
    // Everything must be made automatically
    idTag: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: {
        values: ['Create', 'Modify', 'Remove', 'Pass. Changed'],
        message: 'Action not valid',
      },
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Logs = mongoose.model('Logs', logsSchema);

export default Logs;
