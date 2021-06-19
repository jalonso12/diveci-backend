import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Billing from '../models/logs_n_reports/billingModel.mjs';

export const createBilling = createItem(Billing);
export const getBilling = getItems(Billing);
export const updateBilling = updateItem(Billing);
export const removeBilling = removeItem(Billing);
