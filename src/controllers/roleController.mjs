import Role from '../models/roleModel.mjs';

// CREATE ROLE
export const createRole = async (req, res) => {
  const newRole = await Role.create(req.body);

  return res.status(200).json({
    status: 'success',
    data: newRole,
  });
};

// GET ALL
export const getRoles = async (req, res) => {
  await Role.find({}, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// UPDATE ROLE
export const updateRole = async (req, res) => {
  const { id, title, description } = req.body;

  await Role.findOne({ _id: id }, (err, data) => {
    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: `Role with id: ${id} not found; cannot change values.`,
      });
    }

    /* eslint-disable */
    data.title = title;
    data.description = description;
    /* eslint-enable */

    data.save();

    return res.status(200).json({
      status: 'success',
      data: '',
    });
  });
};

// REMOVE ROLE
export const removeRole = async (req, res) => {
  const { id } = req.body;

  await Role.findOneAndDelete({ _id: id }, (err, data) => {
    if (!data) {
      return res.status(404).json({
        status: 'error',
        message: `Item with id: ${id}, not found`,
      });
    }
    return res.status(200).json({
      status: 'success',
      data: null,
    });
  });
};
