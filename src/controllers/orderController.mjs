import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Order from '../models/logs_n_reports/orderModel.mjs';

export const createOrder = createItem(Order);
export const getOrders = getItems(Order);
export const updateOrder = updateItem(Order);
export const removeOrder = removeItem(Order);
