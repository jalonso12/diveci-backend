import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Table from '../models/miscellaneous/tableModel.mjs';
import { TABLE_PREFIX } from '../handlers/handleAction.mjs';

export const createTable = createItem(Table, TABLE_PREFIX);
export const getTable = getItems(Table);
export const updateTable = updateItem(Table);
export const removeTable = removeItem(Table);
