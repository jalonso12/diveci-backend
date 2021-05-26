import moment from 'moment';
import Role from '../models/roleModel.mjs';
import { decryptText, encryptText } from '../utils/encryptor.mjs';

// > THIS IS A WORKAROUND, MUST BE OPTIMIZED
function roleObj(data) {
  return {
    _id: data._id,
    title: decryptText(data.title),
    __v: data.__v,
  };
}
// <

// CREATE ROLE
export const createRole = async (req, res) => {
  const newRole = await Role.create({
    title: encryptText(req.body.title),
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

  const decryptedData = roles.map((el) => roleObj(el));

  res.status(200).json({
    status: 'success',
    data: decryptedData,
  });
};
