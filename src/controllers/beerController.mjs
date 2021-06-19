import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Beer from '../models/food_n_beverages/beerModel.mjs';

export const createBeer = createItem(Beer);
export const getBeers = getItems(Beer);
export const updateBeer = updateItem(Beer);
export const removeBeer = removeItem(Beer);
