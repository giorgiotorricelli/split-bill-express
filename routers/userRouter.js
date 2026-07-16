import express from 'express';
import { index } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', index);

export default userRouter;