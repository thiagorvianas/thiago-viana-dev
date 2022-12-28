import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import { CertificatesService } from '../services';

export default class CertificateController {
    private _service: CertificatesService;

    constructor() {
      this._service = new CertificatesService();
  
      this.listAllCertificates = this.listAllCertificates.bind(this);
    }
  
    async listAllCertificates(_req: Request, res: Response): Promise<void> {
      const certificates = await this._service.getAll();

      res.status(StatusCodes.OK).json(certificates);
    }
}
