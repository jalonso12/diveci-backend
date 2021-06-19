import express from 'express';
import {
  createCashier,
  getCashier,
  updateCashier,
  removeCashier,
} from '../controllers/cashierController.mjs';

const ROUTER = express.Router();

ROUTER.route('/cashier').post(createCashier).get(getCashier);
ROUTER.route('/cashier/update').patch(updateCashier);
ROUTER.route('/cashier/remove').delete(removeCashier);

export default ROUTER;
