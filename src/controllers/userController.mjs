import User from '../models/userModel.mjs';

export const getUsers = async (req, res) => {
  await User.find({}, (err, data) => {
    if (err) console.log(`${err}`);

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

export const getUser = async (req, res) => {
  const { id } = req.body;
  await User.findOne({ _id: id }, (err, data) => {
    if (err) return err;
    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: 'Not found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};
