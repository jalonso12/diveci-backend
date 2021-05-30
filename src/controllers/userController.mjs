import { getItem, getItems, updateItem } from '../handlers/handleFactory.mjs';
import User from '../models/userModel.mjs';

export const getUsers = getItems(User);
export const getUser = getItem(User);
export const updateUser = updateItem(User);

// In Process
export const getUsernames = async (req, res) => {
  await User.find({});
};
