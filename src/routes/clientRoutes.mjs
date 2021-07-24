import express from 'express';
import {
  createClient,
  getClient,
  updateClient,
  removeClient,
} from '../controllers/clientController.mjs';

const ROUTER = express.Router();

ROUTER.route('/client').post(createClient).get(getClient);
ROUTER.route('/client/update').patch(updateClient);
ROUTER.route('/client/remove').delete(removeClient);

export default ROUTER;
