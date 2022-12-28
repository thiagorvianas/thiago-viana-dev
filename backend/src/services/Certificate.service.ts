import Certificates from '../database/models/Certificate.model';
import { ICertificate } from '../interfaces';

export default class CertificatesService {
    private _model = Certificates;

    async getAll(): Promise<ICertificate[]> {
      const certificates = await this._model.findAll();

      return certificates;
    }
}
