import {
  createItem,
  getItems,
  getItem,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Logs from '../models/logs_n_reports/logModel.mjs';

export const createLog = createItem(Logs);
export const getLogs = getItems(Logs);
export const getLog = getItem(Logs);
export const updateLog = updateItem(Logs);
export const removeLog = removeItem(Logs);
