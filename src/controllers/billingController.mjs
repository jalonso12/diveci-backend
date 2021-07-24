import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Billing from '../models/logs_n_reports/billingModel.mjs';
import { CHECK_PREFIX } from '../handlers/handleAction.mjs';

export const createBilling = createItem(Billing, CHECK_PREFIX);
export const getBilling = getItems(Billing);
export const updateBilling = updateItem(Billing);
export const removeBilling = removeItem(Billing);
