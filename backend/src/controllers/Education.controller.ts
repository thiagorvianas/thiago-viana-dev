import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { EducationsService } from '../services';

export default class EducationController {
    private _service: EducationsService;

    constructor() {
      this._service = new EducationsService();
  
      this.listAllEducations = this.listAllEducations.bind(this);
    }
  
    async listAllEducations(_req: Request, res: Response): Promise<void> {
      const educations = await this._service.getAll();

      res.status(StatusCodes.OK).json(educations);
    }
}
