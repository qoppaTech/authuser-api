import express from 'express';
import { config } from 'dotenv';
import UserRouter from './routes';

config();

const app = express();

const port = process.env.PORT || 3000;


app.use(
    express.json(),
    UserRouter,
)



app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});