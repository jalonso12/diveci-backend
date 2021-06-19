import express from 'express';
import {
  createTableware,
  getTableware,
  updateTableware,
  removeTableware,
} from '../controllers/tablewareController.mjs';

const ROUTER = express.Router();

ROUTER.route('/tableware').post(createTableware).get(getTableware);
ROUTER.route('/tableware/update').patch(updateTableware);
ROUTER.route('/tableware/remove').delete(removeTableware);

export default ROUTER;
