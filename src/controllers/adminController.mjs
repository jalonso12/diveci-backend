import moment from 'moment';
import Role from '../models/roleModel.mjs';

// CREATE ROLE
export const createRole = async (req, res) => {
  const newRole = await Role.create({
    title: req.body.title,
    createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
  });

  res.status(200).json({
    status: 'success',
    data: {
      newRole,
    },
  });
};

// GET ALL
export const getRoles = async (req, res) => {
  const roles = await Role.find({}).exec();

  res.status(200).json({
    status: 'success',
    data: {
      roles,
    },
  });
};
