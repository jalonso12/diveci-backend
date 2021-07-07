import {
  notFound,
  getItem,
  updateItem,
  removeItem,
} from '../handlers/handleFactory.mjs';
import IdTag from '../models/idTagModel.mjs';

export const createIdTag = async (req, res) => {
  const { prefix } = req.body;

  IdTag.findOne(
    { prefix: `${prefix}` },
    'type description value', // '' lets you project the values you want to be shown
    { sort: { createdAt: -1 } },
    (err, data) => {
      console.log(data);

      return res.status(200).json({
        status: 'success',
        result: data,
      });
    },
  );

  await IdTag.create(req.body, (err, data) => {
    if (notFound(err, data, res)) return null;

    return res.status(200).json({
      status: 'success',
      data,
    });
  });
};

// export const getIdTags = getItems(IdTag);
export const getIdTags = async (req, res) => {
  console.log('c:');

  return res;
};

export const getIdTag = getItem(IdTag);
export const updateIdTag = updateItem(IdTag);
export const removeIdTag = removeItem(IdTag);
