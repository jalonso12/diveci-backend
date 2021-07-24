import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Assets from '../models/miscellaneous/assetsModel.mjs';
import { ASSETS_PREFIX } from '../handlers/handleAction.mjs';

export const createAssets = createItem(Assets, ASSETS_PREFIX);
export const getAssets = getItems(Assets);
export const updateAssets = updateItem(Assets);
export const removeAssets = removeItem(Assets);
