import Biographies from '../database/models/Biography.model';
import { IBiography } from '../interfaces';

export default class BiographiesService {
    private _model = Biographies;

    async getAll(): Promise<IBiography[]> {
      const biographies = await this._model.findAll();

      return biographies;
    }
}
