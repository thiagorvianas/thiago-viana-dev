import 'express-async-errors';
import { Router } from 'express';
import { EducationController } from '../controllers';

const educationController = new EducationController();

const educationRouter = Router();

educationRouter.get('/', educationController.listAllEducations);

export default educationRouter;