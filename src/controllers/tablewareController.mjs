import {
  createItem,
  getItems,
  removeItem,
  updateItem,
} from '../handlers/handleFactory.mjs';
import Tableware from '../models/miscellaneous/tablewareModel.mjs';

export const createTableware = createItem(Tableware);
export const getTableware = getItems(Tableware);
export const updateTableware = updateItem(Tableware);
export const removeTableware = removeItem(Tableware);
