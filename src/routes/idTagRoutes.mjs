import express from 'express';
import {
  createIdTag,
  getIdTags,
  getIdTag,
  updateIdTag,
  removeIdTag,
} from '../controllers/idTagController.mjs';

const ROUTER = express.Router();

ROUTER.route('/idTags').post(createIdTag).get(getIdTags);
ROUTER.route('/idTag').get(getIdTag);
ROUTER.route('/idTags/update').patch(updateIdTag);
ROUTER.route('/idTags/remove').delete(removeIdTag);

export default ROUTER;
