import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Provider from '../models/providerModel.mjs';
import { PROVIDER_PREFIX } from '../handlers/handleAction.mjs';

export const createProvider = createItem(Provider, PROVIDER_PREFIX);
export const getProvider = getItems(Provider);
export const updateProvider = updateItem(Provider);
export const removeProvider = removeItem(Provider);
