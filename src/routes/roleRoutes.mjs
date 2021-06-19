import express from 'express';
import {
  createRole,
  getRole,
  getRoles,
  removeRole,
  updateRole,
} from '../controllers/roleController.mjs';

const ROUTER = express.Router();

ROUTER.route('/roles').get(getRoles);

ROUTER.route('/role').get(getRole);

ROUTER.route('/roles/update').patch(updateRole);

ROUTER.route('/roles/remove').delete(removeRole);

ROUTER.route('/roles/new-role').post(createRole);

export default ROUTER;
