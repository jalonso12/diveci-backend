import {
  createItem,
  getItems,
  removeItem,
  updateItem,
} from '../handlers/handleFactory.mjs';
import Tableware from '../models/miscellaneous/tablewareModel.mjs';
import { TABLEWARE_PREFIX } from '../handlers/handleAction.mjs';

export const createTableware = createItem(Tableware, TABLEWARE_PREFIX);
export const getTableware = getItems(Tableware);
export const updateTableware = updateItem(Tableware);
export const removeTableware = removeItem(Tableware);
