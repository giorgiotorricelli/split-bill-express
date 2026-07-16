import express, { json } from 'express';
import userRouter from './routers/userRouter.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, (error) => {
    error ? console.log('error when connecting to server')
    : console.log(`connected successfully on port ${port}`);
    
    
})