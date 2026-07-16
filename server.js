import express from 'express';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, (error) => {
    error ? console.log('error when connecting to server')
    : console.log(`connected successfully on port ${port}`);
    
    
})