import express, { json } from 'express';
import userRouter from './routers/userRouter.js';
import groupRouter from './routers/groupRouter.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/groups', groupRouter);

app.listen(port, (error) => {
    error ? console.log('error when connecting to server')
    : console.log(`connected successfully on port ${port}`);
    
    
})