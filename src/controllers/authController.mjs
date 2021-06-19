import User from '../models/userModel.mjs';

// Users are not unique
// since the username is getting encrypted
// a way to validate must be done
export const registerUser = async (req, res) => {
  const newUser = await User.create(req.body);

  return res.status(200).json({
    status: 'success',
    newUser,
  });
};

export const loginUser = async (req, res) => {
  const { id, password } = req.body;

  const user = await User.findOne({ _id: id }, async (err) => {
    let error;
    if (err) error = err;
    return error;
  });

  if (!user || !(await user.correctPassword(user.password, password))) {
    return res.status(401).json({
      status: 'error',
      message: 'Incorrect user or password',
    });
  }

  // Change this to session start
  return res.status(200).json({
    status: 'success',
    user,
  });
};
