import express from 'express';
import {
  createHygiene,
  getHygiene,
  updateHygiene,
  removeHygiene,
} from '../controllers/hygieneController.mjs';

const ROUTER = express.Router();

ROUTER.route('/hygiene').post(createHygiene).get(getHygiene);
ROUTER.route('/hygiene/update').patch(updateHygiene);
ROUTER.route('/hygiene/remove').delete(removeHygiene);

export default ROUTER;
