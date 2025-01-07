import express from 'express';
import { registerUser, loginUser } from '../controller/user.controller.js';
const authRouter = express.Router();

// Register Route
authRouter.post('/signup', registerUser);

// Login Route
authRouter.post('/login', loginUser);

export {authRouter}
