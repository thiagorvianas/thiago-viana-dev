import 'express-async-errors';
import { Router } from 'express';
import { MessageController } from '../controllers';

const messageController = new MessageController();

const messageRouter = Router();

messageRouter.get('/', messageController.listAllMessage);

messageRouter.post('/', messageController.postMessage);

export default messageRouter;