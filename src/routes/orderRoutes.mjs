import express from 'express';
import {
  createOrder,
  getOrders,
  updateOrder,
  removeOrder,
} from '../controllers/orderController.mjs';

const ROUTER = express.Router();

ROUTER.route('/order').post(createOrder).get(getOrders);
ROUTER.route('/order/update').patch(updateOrder);
ROUTER.route('/order/remove').delete(removeOrder);

export default ROUTER;
