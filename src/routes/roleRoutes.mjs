import express from 'express';
import { createRole, getRoles } from '../controllers/adminController.mjs';

const ROUTER = express.Router();

ROUTER.route('/roles').get(getRoles);

ROUTER.route('/new-role').post(createRole);

export default ROUTER;
