import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import NonAlcoholic from '../models/food_n_beverages/nonAlcoholicModel.mjs';
import { BEVERAGE_PREFIX } from '../handlers/handleAction.mjs';

export const createNonAlcoholic = createItem(NonAlcoholic, BEVERAGE_PREFIX);
export const getNonAlcoholic = getItems(NonAlcoholic);
export const updateNonAlcoholic = updateItem(NonAlcoholic);
export const removeNonAlcoholic = removeItem(NonAlcoholic);
