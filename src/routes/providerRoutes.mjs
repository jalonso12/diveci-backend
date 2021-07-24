import express from 'express';
import {
  createProvider,
  getProvider,
  updateProvider,
  removeProvider,
} from '../controllers/providerController.mjs';

const ROUTER = express.Router();

ROUTER.route('/provider').post(createProvider).get(getProvider);
ROUTER.route('/provider/update').patch(updateProvider);
ROUTER.route('/provider/remove').delete(removeProvider);

export default ROUTER;
