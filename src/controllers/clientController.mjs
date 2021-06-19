import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Client from '../models/clientModel.mjs';

export const createClient = createItem(Client);
export const getClient = getItems(Client);
export const updateClient = updateItem(Client);
export const removeClient = removeItem(Client);
