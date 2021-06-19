import express from 'express';
import {
  createCountry,
  getCountries,
  updateCountry,
  removeCountry,
} from '../controllers/countryController.mjs';

const ROUTER = express.Router();

ROUTER.route('/country').post(createCountry).get(getCountries);
ROUTER.route('/country/update').patch(updateCountry);
ROUTER.route('/country/remove').delete(removeCountry);

export default ROUTER;
