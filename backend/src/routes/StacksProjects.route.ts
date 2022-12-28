import 'express-async-errors';
import { Router } from 'express';
import { StacksProjectsController } from '../controllers';

const stacksProjectsController = new StacksProjectsController();

const stacksProjectsRouter = Router();

stacksProjectsRouter.get('/', stacksProjectsController.listAllStacksProjects);

export default stacksProjectsRouter;