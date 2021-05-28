import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/authRoutes.mjs';
import roleRouter from './routes/roleRoutes.mjs';
import userRouter from './routes/userRoutes.mjs';

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', roleRouter);
app.use('/', userRouter, authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
