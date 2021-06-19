import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Provider from '../models/providerModel.mjs';

export const createProvider = createItem(Provider);
export const getProvider = getItems(Provider);
export const updateProvider = updateItem(Provider);
export const removeProvider = removeItem(Provider);
