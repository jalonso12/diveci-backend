import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import ClientReport from '../models/logs_n_reports/clientReportModel.mjs';

export const createClientReport = createItem(ClientReport);
export const getClientReports = getItems(ClientReport);
export const updateClientReport = updateItem(ClientReport);
export const removeClientReport = removeItem(ClientReport);
