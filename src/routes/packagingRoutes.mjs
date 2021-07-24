import express from 'express';
import {
  createPackaging,
  getPackaging,
  updatePackaging,
  removePackaging,
} from '../controllers/packagingController.mjs';

const ROUTER = express.Router();

ROUTER.route('/packaging').post(createPackaging).get(getPackaging);
ROUTER.route('/packaging/update').patch(updatePackaging);
ROUTER.route('/packaging/remove').delete(removePackaging);

export default ROUTER;
