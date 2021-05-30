import express from 'express';
import {
  getUser,
  getUsernames,
  getUsers,
  updateUser,
} from '../controllers/userController.mjs';

const ROUTER = express.Router();

ROUTER.route('/users').get(getUsers);

ROUTER.route('/user').get(getUser);

ROUTER.route('/users/usernames').get(getUsernames);

ROUTER.route('/user/id').patch(updateUser);

export default ROUTER;
