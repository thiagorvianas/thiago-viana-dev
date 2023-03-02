import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { ExperiencesService } from '../services';

export default class ExperienceController {
    private _service: ExperiencesService;

    constructor() {
      this._service = new ExperiencesService();
  
      this.listAllExperiences = this.listAllExperiences.bind(this);
    }
  
    async listAllExperiences(_req: Request, res: Response): Promise<void> {
      const experiences = await this._service.getAll();

      res.status(StatusCodes.OK).json(experiences);
    }
}
