import { Router } from 'express';
import 'express-async-errors';
import { StackController } from '../controllers';

const stackController = new StackController();

const stackRouter = Router();

stackRouter.get('/', stackController.listAllStacks);

export default stackRouter;