import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Meal from '../models/food_n_beverages/mealModel.mjs';

export const createMeal = createItem(Meal);
export const getMeal = getItems(Meal);
export const updateMeal = updateItem(Meal);
export const removeMeal = removeItem(Meal);
