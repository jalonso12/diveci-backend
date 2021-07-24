import express from 'express';
import {
  createProvProducts,
  getProvProducts,
  updateProvProducts,
  removeProvProducts,
} from '../controllers/provProductsController.mjs';

const ROUTER = express.Router();

ROUTER.route('/provProducts').post(createProvProducts).get(getProvProducts);
ROUTER.route('/provProducts/update').patch(updateProvProducts);
ROUTER.route('/provProducts/remove').delete(removeProvProducts);

export default ROUTER;
