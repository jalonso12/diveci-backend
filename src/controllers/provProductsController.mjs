import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import ProvProducts from '../models/provProductsModel.mjs';

export const createProvProducts = createItem(ProvProducts);
export const getProvProducts = getItems(ProvProducts);
export const updateProvProducts = updateItem(ProvProducts);
export const removeProvProducts = removeItem(ProvProducts);
