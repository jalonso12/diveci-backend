import express from 'express';
import {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  removeRestaurant,
} from '../controllers/restaurantController.mjs';

const ROUTER = express.Router();

ROUTER.route('/').post(createRestaurant).get(getRestaurants);
ROUTER.route('/update').patch(updateRestaurant);
ROUTER.route('/remove').delete(removeRestaurant);

export default ROUTER;
