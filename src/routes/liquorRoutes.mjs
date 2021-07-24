import express from 'express';
import {
  createLiquor,
  getLiquors,
  updateLiquor,
  removeLiquor,
} from '../controllers/liquorController.mjs';

const ROUTER = express.Router();

ROUTER.route('/liquor').post(createLiquor).get(getLiquors);
ROUTER.route('/liquor/update').patch(updateLiquor);
ROUTER.route('/liquor/remove').delete(removeLiquor);

export default ROUTER;
