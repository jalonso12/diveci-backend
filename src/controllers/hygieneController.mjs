import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Hygiene from '../models/miscellaneous/hygieneModel.mjs';

export const createHygiene = createItem(Hygiene);
export const getHygiene = getItems(Hygiene);
export const updateHygiene = updateItem(Hygiene);
export const removeHygiene = removeItem(Hygiene);
