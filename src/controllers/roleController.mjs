import {
  createItem,
  getItem,
  getItems,
  removeItem,
  updateItem,
} from '../handlers/handleFactory.mjs';
import Role from '../models/roleModel.mjs';

export const createRole = createItem(Role);
export const getRoles = getItems(Role);
export const getRole = getItem(Role);
export const updateRole = updateItem(Role);
export const removeRole = removeItem(Role);
