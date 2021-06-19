import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Cashier from '../models/miscellaneous/cashierModel.mjs';

export const createCashier = createItem(Cashier);
export const getCashier = getItems(Cashier);
export const updateCashier = updateItem(Cashier);
export const removeCashier = removeItem(Cashier);
