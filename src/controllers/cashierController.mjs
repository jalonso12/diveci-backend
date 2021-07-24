import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Cashier from '../models/miscellaneous/cashierModel.mjs';
import { CASHIER_PREFIX } from '../handlers/handleAction.mjs';

export const createCashier = createItem(Cashier, CASHIER_PREFIX);
export const getCashier = getItems(Cashier);
export const updateCashier = updateItem(Cashier);
export const removeCashier = removeItem(Cashier);
