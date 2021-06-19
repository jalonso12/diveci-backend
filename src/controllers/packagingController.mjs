import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Packaging from '../models/miscellaneous/packagingModel.mjs';

export const createPackaging = createItem(Packaging);
export const getPackaging = getItems(Packaging);
export const updatePackaging = updateItem(Packaging);
export const removePackaging = removeItem(Packaging);
