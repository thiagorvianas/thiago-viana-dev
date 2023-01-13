import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { MessagesService } from '../services';

export default class MessageController {
    private _service: MessagesService;

    constructor() {
      this._service = new MessagesService();
  
      this.listAllMessage = this.listAllMessage.bind(this);
      this.postMessage = this.postMessage.bind(this);
    }
  
    async listAllMessage(_req: Request, res: Response): Promise<void> {
      const message = await this._service.getAll();

      res.status(StatusCodes.OK).json(message);
    }

    async postMessage(req: Request, res: Response): Promise<void> {    
      const message = await this._service.postMessage(req.body);
    
      res.status(StatusCodes.CREATED).end();
    }
}
