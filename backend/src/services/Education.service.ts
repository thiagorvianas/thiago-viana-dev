import Educations from '../database/models/Education.model';
import { IEducation } from '../interfaces';

export default class EducationsService {
    private _model = Educations;

    async getAll(): Promise<IEducation[]> {
      const educations = await this._model.findAll();

      return educations;
    }
}
