import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Packaging from '../models/miscellaneous/packagingModel.mjs';
import { PACKAGING_PREFIX } from '../handlers/handleAction.mjs';

export const createPackaging = createItem(Packaging, PACKAGING_PREFIX);
export const getPackaging = getItems(Packaging);
export const updatePackaging = updateItem(Packaging);
export const removePackaging = removeItem(Packaging);
