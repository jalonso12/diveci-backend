import express from 'express';
import {
  createTable,
  getTable,
  updateTable,
  removeTable,
} from '../controllers/tableController.mjs';

const ROUTER = express.Router();

ROUTER.route('/table').post(createTable).get(getTable);
ROUTER.route('/table/update').patch(updateTable);
ROUTER.route('/table/remove').delete(removeTable);

export default ROUTER;
