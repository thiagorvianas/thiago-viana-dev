import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { StackService } from '../services';

export default class StackController {
    private _service: StackService;

    constructor() {
      this._service = new StackService();
  
      this.listAllStacks = this.listAllStacks.bind(this);
    }
  
    async listAllStacks(_req: Request, res: Response): Promise<void> {
      const stacks = await this._service.getAll();

      res.status(StatusCodes.OK).json(stacks);
    }
}
