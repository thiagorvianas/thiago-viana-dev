import 'express-async-errors';
import { Router } from 'express';
import { ExperienceController } from '../controllers';

const experienceController = new ExperienceController();

const experienceRouter = Router();

experienceRouter.get('/', experienceController.listAllExperiences);

export default experienceRouter;