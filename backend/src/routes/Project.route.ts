import 'express-async-errors';
import { Router } from 'express';
import { ProjectsController } from '../controllers';

const projectsController = new ProjectsController();

const projectRouter = Router();

projectRouter.get('/', projectsController.listAllProjects);

export default projectRouter;