import express from 'express';
import { getUser, getUsers } from '../controllers/userController.mjs';

const ROUTER = express.Router();

ROUTER.route('/users').get(getUsers);

ROUTER.route('/user').get(getUser);

export default ROUTER;
