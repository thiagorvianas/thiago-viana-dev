import Projects from '../database/models/Project.model';
import { IProject } from '../interfaces';

export default class ProjectsService {
    private _model = Projects;

    async getAll(): Promise<IProject[]> {
      const projects = await this._model.findAll();
      
      return projects;
    }
}
