import express from 'express';
import { index, show, create, destroy } from '../controllers/groupController.js';
import { validateSlug } from '../middlewares/slugValidation.js';
import { checkBiggerId } from '../middlewares/checkBiggerId.js';
import { checkSlugs } from '../middlewares/checkSlugs.js';
import { checkGroupData } from '../middlewares/checkGroupData.js';
import { checkUserId } from '../middlewares/checkUserId.js';
import { checkMembers } from '../middlewares/checkMembers.js';
import { delCheckSlugs } from '../middlewares/delCheckSlug.js';

const groupRouter = express.Router();

groupRouter.get('/', index);
groupRouter.get('/:slug', validateSlug, show);
groupRouter.post('/', checkGroupData, checkUserId, checkBiggerId, checkSlugs, checkMembers, create);
groupRouter.delete('/:slug', delCheckSlugs, destroy);

export default groupRouter;