import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.mjs';

const ROUTER = express.Router();

ROUTER.route('/register').post(registerUser);

ROUTER.route('/login').get(loginUser);

export default ROUTER;
