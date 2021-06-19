import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Country from '../models/countryModel.mjs';

export const createCountry = createItem(Country);
export const getCountries = getItems(Country);
export const updateCountry = updateItem(Country);
export const removeCountry = removeItem(Country);
