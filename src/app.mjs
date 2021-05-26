import dotenv from 'dotenv';
import express from 'express';
import roleRouter from './routes/roleRoutes.mjs';

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', roleRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
