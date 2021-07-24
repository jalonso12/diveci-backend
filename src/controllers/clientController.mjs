import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Client from '../models/clientModel.mjs';
import { CLIENT_PREFIX } from '../handlers/handleAction.mjs';

export const createClient = createItem(Client, CLIENT_PREFIX);
export const getClient = getItems(Client);
export const updateClient = updateItem(Client);
export const removeClient = removeItem(Client);
