import { Router } from 'express';

import biographyRouter from './Biography.route';
import projectRouter from './Project.route';
import certificateRouter from './Certificate.route';
import educationRouter from './Education.route';
import experienceRouter from './Experience.route';

const router = Router();

router.use('/biography', biographyRouter);
router.use('/projects', projectRouter);
router.use('/certificates', certificateRouter);
router.use('/education', educationRouter);
router.use('/experience', experienceRouter);

export default router;