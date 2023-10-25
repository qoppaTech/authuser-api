import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT;

app.listen(() => {
    console.log(`Server running in port ${port}`);
});