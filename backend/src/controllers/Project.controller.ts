import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { ProjectsService } from '../services';

export default class ProjectsController {
    private _service: ProjectsService;

    constructor() {
      this._service = new ProjectsService();
  
      this.listAllProjects = this.listAllProjects.bind(this);
    }
  
    async listAllProjects(_req: Request, res: Response): Promise<void> {
      const projects = await this._service.getAll();

      res.status(StatusCodes.OK).json(projects);
    }
}
