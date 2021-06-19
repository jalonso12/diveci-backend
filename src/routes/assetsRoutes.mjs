import express from 'express';
import {
  createAssets,
  getAssets,
  updateAssets,
  removeAssets,
} from '../controllers/assetsController.mjs';

const ROUTER = express.Router();

ROUTER.route('/assets').post(createAssets).get(getAssets);
ROUTER.route('/assets/update').patch(updateAssets);
ROUTER.route('/assets/remove').delete(removeAssets);

export default ROUTER;
