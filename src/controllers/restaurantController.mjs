import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Restaurant from '../models/restaurantModel.mjs';

export const createRestaurant = createItem(Restaurant);
export const getRestaurants = getItems(Restaurant);
export const updateRestaurant = updateItem(Restaurant);
export const removeRestaurant = removeItem(Restaurant);
