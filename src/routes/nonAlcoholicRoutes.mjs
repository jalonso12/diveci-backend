import express from 'express';
import {
  createNonAlcoholic,
  getNonAlcoholic,
  updateNonAlcoholic,
  removeNonAlcoholic,
} from '../controllers/nonAlcoholicController.mjs';

const ROUTER = express.Router();

ROUTER.route('/nonAlcoholic').post(createNonAlcoholic).get(getNonAlcoholic);
ROUTER.route('/nonAlcoholic/update').patch(updateNonAlcoholic);
ROUTER.route('/nonAlcoholic/remove').delete(removeNonAlcoholic);

export default ROUTER;
