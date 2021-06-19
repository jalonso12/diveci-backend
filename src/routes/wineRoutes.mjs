import express from 'express';
import {
  createWine,
  getWine,
  updateWine,
  removeWine,
} from '../controllers/wineController.mjs';

const ROUTER = express.Router();

ROUTER.route('/wine').post(createWine).get(getWine);
ROUTER.route('/wine/update').patch(updateWine);
ROUTER.route('/wine/remove').delete(removeWine);

export default ROUTER;
