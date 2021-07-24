import IdTag from '../models/idTagModel.mjs';
import { prefixSelector } from './handleAction.mjs';

export const notFound = (err, data, res) => {
  if (err) return err;
  if (!data) {
    return res.status(404).json({
      status: 'error',
      message: 'Item(s) not found',
    });
  }
  return false;
};

async function generateTag(body, prefix) {
  // Find last idTag in db
  let lastIdTag = await IdTag.findOne(
    { prefix },
    'type description value', // '' lets you project the values you want to be shown
    { sort: { createdAt: -1 } },
  );

  if (await !lastIdTag) {
    lastIdTag = {
      value: 11,
    };
  }

  // Create
  const newIdTag = await prefixSelector(
    body.title || body.name || '',
    prefix,
    lastIdTag.value,
  );

  await IdTag.create(newIdTag);

  return newIdTag.tag;
}

// CREATE
export const createItem = (Model, prefix) => async (req, res) => {
  const itemBody = {
    ...req.body,
    idTag: await generateTag(req.body, prefix),
  };

  // Create item
  await Model.create(itemBody, (err, data) => {
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

    /* eslint-disable-next-line */
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
