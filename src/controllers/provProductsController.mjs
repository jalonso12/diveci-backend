import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import ProvProducts from '../models/provProductsModel.mjs';
import { PROD_PROVIDER_PREFIX } from '../handlers/handleAction.mjs';

export const createProvProducts = createItem(
  ProvProducts,
  PROD_PROVIDER_PREFIX,
);
export const getProvProducts = getItems(ProvProducts);
export const updateProvProducts = updateItem(ProvProducts);
export const removeProvProducts = removeItem(ProvProducts);
