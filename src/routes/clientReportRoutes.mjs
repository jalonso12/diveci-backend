import express from 'express';
import {
  createClientReport,
  getClientReports,
  updateClientReport,
  removeClientReport,
} from '../controllers/clientReportController.mjs';

const ROUTER = express.Router();

ROUTER.route('/clientReport').post(createClientReport).get(getClientReports);
ROUTER.route('/clientReport/update').patch(updateClientReport);
ROUTER.route('/clientReport/remove').delete(removeClientReport);

export default ROUTER;
