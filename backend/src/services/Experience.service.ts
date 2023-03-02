import Experiences from '../database/models/Experience.model';
import { IExperience } from '../interfaces';

export default class ExperiencesService {
    private _model = Experiences;

    async getAll(): Promise<IExperience[]> {
      const experiences = await this._model.findAll();

      return experiences;
    }
}
