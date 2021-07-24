import mongoose from 'mongoose';
import moment from 'moment';

const mealSchema = new mongoose.Schema(
  {
    idTag: String,
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      // THIS MUST BE AN ARRAY OF INGREDIENTS AKA RECIPE
      // PRICE
      // WEIGHT
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamp: {
      currentTime: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
);

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
