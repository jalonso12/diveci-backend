import {
  createItem,
  getItems,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import Meal from '../models/food_n_beverages/mealModel.mjs';
import { MEAL_PREFIX } from '../handlers/handleAction.mjs';

export const createMeal = createItem(Meal, MEAL_PREFIX);
export const getMeal = getItems(Meal);
export const updateMeal = updateItem(Meal);
export const removeMeal = removeItem(Meal);
