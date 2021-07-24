import express from 'express';
import {
  createMeal,
  getMeal,
  updateMeal,
  removeMeal,
} from '../controllers/mealController.mjs';

const ROUTER = express.Router();

ROUTER.route('/meal').post(createMeal).get(getMeal);
ROUTER.route('/meal/update').patch(updateMeal);
ROUTER.route('/meal/remove').delete(removeMeal);

export default ROUTER;
