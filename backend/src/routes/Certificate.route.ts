import 'express-async-errors';
import { Router } from 'express';
import { CertificateController } from '../controllers';

const certificateController = new CertificateController();

const certificateRouter = Router();

certificateRouter.get('/', certificateController.listAllCertificates);

export default certificateRouter;