function notFound(err, data, res) {
  if (err) return err;
  if (!data) {
    return res.status(404).json({
      status: 'error',
      message: 'Item(s) not found',
    });
  }
  return false;
}

// CREATE
export const createItem = (Model) => async (req, res) => {
  await Model.create(req.body, (err, data) => {
    if (notFound(err, data, res)) return null;

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// GET ALL
export const getItems = (Model) => async (req, res) => {
  await Model.find({}, (err, data) => {
    if (notFound(err, data, res)) return null;

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// GET ONE
export const getItem = (Model) => async (req, res) => {
  const { id } = req.body;
  await Model.findOne({ _id: id }, (err, data) => {
    if (notFound(err, data, res)) return null;

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// UPDATE ONE
export const updateItem = (Model) => async (req, res) => {
  const { id } = req.body;

  await Model.findOne({ _id: id }, (err, data) => {
    if (notFound(err, data, res)) return null;

    const newData = {
      ...data._doc,
      ...req.body,
    };

    data._doc = newData;

    data.save();

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// DELETE ONE
export const removeItem = (Model) => async (req, res) => {
  const { id } = req.body;

  await Model.findOneAndDelete({ _id: id }, (err, data) => {
    if (notFound(err, data, res)) return null;

    return res.status(200).json({
      status: 'success',
      data: null,
    });
  });
};
