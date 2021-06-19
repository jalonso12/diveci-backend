import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Liquor from '../models/food_n_beverages/liquorModel.mjs';

export const createLiquor = createItem(Liquor);
export const getLiquors = getItems(Liquor);
export const updateLiquor = updateItem(Liquor);
export const removeLiquor = removeItem(Liquor);
