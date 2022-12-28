import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import BiographiesService from '../services/Biography.service';

export default class BiographiesController {
    private _service: BiographiesService;

    constructor() {
      this._service = new BiographiesService();
  
      this.listAllBiographies = this.listAllBiographies.bind(this);
    }
  
    async listAllBiographies(_req: Request, res: Response): Promise<void> {
      const biography = await this._service.getAll();

      res.status(StatusCodes.OK).json(biography);
    }
}