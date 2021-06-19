import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Assets from '../models/miscellaneous/assetsModel.mjs';

export const createAssets = createItem(Assets);
export const getAssets = getItems(Assets);
export const updateAssets = updateItem(Assets);
export const removeAssets = removeItem(Assets);
