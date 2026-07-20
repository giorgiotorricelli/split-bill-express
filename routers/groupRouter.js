import express from 'express';
import { index, show, create } from '../controllers/groupController.js';
import { validateSlug } from '../middlewares/slugValidation.js';
import { checkBiggerId } from '../middlewares/checkBiggerId.js';
import { checkSlugs } from '../middlewares/checkSlugs.js';
import { checkGroupData } from '../middlewares/checkGroupData.js';
import { checkUserId } from '../middlewares/checkUserId.js';
import { checkMembers } from '../middlewares/checkMembers.js';

const groupRouter = express.Router();

groupRouter.get('/', index);
groupRouter.get('/:slug', validateSlug, show);
groupRouter.post('/', checkGroupData, checkUserId, checkBiggerId, checkSlugs, checkMembers, create);

export default groupRouter;