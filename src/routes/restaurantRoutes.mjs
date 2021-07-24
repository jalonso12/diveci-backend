import express from 'express';
import {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  removeRestaurant,
} from '../controllers/restaurantController.mjs';

const ROUTER = express.Router();

ROUTER.route('/restaurant').post(createRestaurant).get(getRestaurants);
ROUTER.route('/restaurant/update').patch(updateRestaurant);
ROUTER.route('/restaurant/remove').delete(removeRestaurant);

export default ROUTER;
