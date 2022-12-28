import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { StacksProjectsService } from '../services';

export default class StacksProjectsController {
    private _service: StacksProjectsService;

    constructor() {
      this._service = new StacksProjectsService();
  
      this.listAllStacksProjects = this.listAllStacksProjects.bind(this);
    }
  
    async listAllStacksProjects(_req: Request, res: Response): Promise<void> {
      const stacksProjects = await this._service.getAll();

      res.status(StatusCodes.OK).json(stacksProjects);
    }
}
