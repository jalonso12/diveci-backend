import express from 'express';
import {
  createLog,
  getLog,
  getLogs,
  updateLog,
  removeLog,
} from '../controllers/logController.mjs';

const ROUTER = express.Router();

ROUTER.route('/logs').post(createLog).get(getLogs);
ROUTER.route('/log').get(getLog);
ROUTER.route('/log/update').patch(updateLog);
ROUTER.route('/log/remove').delete(removeLog);

export default ROUTER;
