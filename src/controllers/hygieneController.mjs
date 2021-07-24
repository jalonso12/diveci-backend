import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Hygiene from '../models/miscellaneous/hygieneModel.mjs';
import { HYGIENE_PREFIX } from '../handlers/handleAction.mjs';

export const createHygiene = createItem(Hygiene, HYGIENE_PREFIX);
export const getHygiene = getItems(Hygiene);
export const updateHygiene = updateItem(Hygiene);
export const removeHygiene = removeItem(Hygiene);
