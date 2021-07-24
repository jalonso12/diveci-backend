import express from 'express';
import {
  createBeer,
  getBeers,
  updateBeer,
  removeBeer,
} from '../controllers/beerController.mjs';

const ROUTER = express.Router();

ROUTER.route('/beer').post(createBeer).get(getBeers);
ROUTER.route('/beer/update').patch(updateBeer);
ROUTER.route('/beer/remove').delete(removeBeer);

export default ROUTER;
