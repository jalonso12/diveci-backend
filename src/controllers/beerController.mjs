import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Beer from '../models/food_n_beverages/beerModel.mjs';
import { BEER_PREFIX } from '../handlers/handleAction.mjs';

export const createBeer = createItem(Beer, BEER_PREFIX);
export const getBeers = getItems(Beer);
export const updateBeer = updateItem(Beer);
export const removeBeer = removeItem(Beer);
