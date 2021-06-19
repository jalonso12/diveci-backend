import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/authRoutes.mjs';
import idTagRouter from './routes/idTagRoutes.mjs';
import roleRouter from './routes/roleRoutes.mjs';
import userRouter from './routes/userRoutes.mjs';
import logRouter from './routes/logRoutes.mjs';
import countryRouter from './routes/countryRoutes.mjs';
import restaurantRouter from './routes/restaurantRoutes.mjs';
import tablewareRouter from './routes/tablewareRoutes.mjs';

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', roleRouter, idTagRouter, countryRouter);
app.use('/security', logRouter);
app.use('/restaurant', restaurantRouter, tablewareRouter);
app.use('/', userRouter, authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
