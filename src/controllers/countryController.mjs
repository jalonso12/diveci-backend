import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Country from '../models/countryModel.mjs';
import { COUNTRY_PREFIX } from '../handlers/handleAction.mjs';

export const createCountry = createItem(Country, COUNTRY_PREFIX);
export const getCountries = getItems(Country);
export const updateCountry = updateItem(Country);
export const removeCountry = removeItem(Country);
