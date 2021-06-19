import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Table from '../models/miscellaneous/tableModel.mjs';

export const createTable = createItem(Table);
export const getTable = getItems(Table);
export const updateTable = updateItem(Table);
export const removeTable = removeItem(Table);
