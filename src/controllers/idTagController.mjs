import {
  createItem,
  getItems,
  getItem,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import IdTag from '../models/idTagModel.mjs';

export const createIdTag = createItem(IdTag);
export const getIdTags = getItems(IdTag);
export const getIdTag = getItem(IdTag);
export const updateIdTag = updateItem(IdTag);
export const removeIdTag = removeItem(IdTag);
