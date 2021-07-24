import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Liquor from '../models/food_n_beverages/liquorModel.mjs';
import { LIQUOR_PREFIX } from '../handlers/handleAction.mjs';

export const createLiquor = createItem(Liquor, LIQUOR_PREFIX);
export const getLiquors = getItems(Liquor);
export const updateLiquor = updateItem(Liquor);
export const removeLiquor = removeItem(Liquor);
