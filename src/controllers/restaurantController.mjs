import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Restaurant from '../models/restaurantModel.mjs';
import { RESTAURANT_PREFIX } from '../handlers/handleAction.mjs';

export const createRestaurant = createItem(Restaurant, RESTAURANT_PREFIX);
export const getRestaurants = getItems(Restaurant);
export const updateRestaurant = updateItem(Restaurant);
export const removeRestaurant = removeItem(Restaurant);
