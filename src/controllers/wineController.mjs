import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Wine from '../models/food_n_beverages/wineModel.mjs';

export const createWine = createItem(Wine);
export const getWine = getItems(Wine);
export const updateWine = updateItem(Wine);
export const removeWine = removeItem(Wine);
