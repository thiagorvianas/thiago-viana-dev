import 'express-async-errors';
import { Router } from 'express';
import { BiographiesController } from '../controllers';

const biographiesController = new BiographiesController();

const biographyRouter = Router();

biographyRouter.get('/', biographiesController.listAllBiographies);

export default biographyRouter;