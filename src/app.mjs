import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/authRoutes.mjs';
import roleRouter from './routes/roleRoutes.mjs';
import userRouter from './routes/userRoutes.mjs';
import assetsRouter from './routes/assetsRoutes.mjs';
import beerRouter from './routes/beerRoutes.mjs';
import billingRouter from './routes/billingRoutes.mjs';
import cashierRouter from './routes/cashierRoutes.mjs';
import clientReportRouter from './routes/clientReportRoutes.mjs';
import clientRouter from './routes/clientRoutes.mjs';
import countryRouter from './routes/countryRoutes.mjs';
import hygieneRouter from './routes/hygieneRoutes.mjs';
import idTagRouter from './routes/idTagRoutes.mjs';
import liquorRouter from './routes/liquorRoutes.mjs';
import logRouter from './routes/logRoutes.mjs';
import nonAlcoholicRouter from './routes/nonAlcoholicRoutes.mjs';
import orderRouter from './routes/orderRoutes.mjs';
import packagingRouter from './routes/packagingRoutes.mjs';
import providerRouter from './routes/providerRoutes.mjs';
import provProductsRouter from './routes/provProductsRoutes.mjs';
import restaurantRouter from './routes/restaurantRoutes.mjs';
import tableRouter from './routes/tableRoutes.mjs';
import tablewareRouter from './routes/tablewareRoutes.mjs';
import wineRouter from './routes/wineRoutes.mjs';
import mealRouter from './routes/mealRoutes.mjs';

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// THIS SHOULD BE CHANGED INORDER TO BE ABLE TO USE MIDDLEWARE
// ps: i think... lol

app.use(
  '/admin',
  roleRouter,
  billingRouter,
  cashierRouter,
  clientReportRouter,
  clientRouter,
  providerRouter,
  provProductsRouter,
  restaurantRouter,
  tableRouter,
  countryRouter,
  orderRouter,
);
app.use('/security', authRouter, userRouter, idTagRouter, logRouter);
app.use(
  '/restaurant',
  assetsRouter,
  beerRouter,
  hygieneRouter,
  liquorRouter,
  nonAlcoholicRouter,
  packagingRouter,
  tablewareRouter,
  wineRouter,
  mealRouter,
);

export default app;
