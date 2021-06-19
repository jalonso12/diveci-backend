import express from 'express';
import {
  createBilling,
  getBilling,
  updateBilling,
  removeBilling,
} from '../controllers/billingController.mjs';

const ROUTER = express.Router();

ROUTER.route('/billing').post(createBilling).get(getBilling);
ROUTER.route('/billing/update').patch(updateBilling);
ROUTER.route('/billing/remove').delete(removeBilling);

export default ROUTER;
