import StacksProjects from '../database/models/StackProject.model';
import Projects from '../database/models/Project.model';
import Stacks from '../database/models/Stack.model';
import { IStackProjects } from '../interfaces';

export default class StacksProjectsService {
    private _model = StacksProjects;

    async getAll() {
      const stacksProjects = await this._model.findAll();

      const result = stacksProjects.map(async ({ projectId, stackId }: IStackProjects) => {
        const project = await Projects.findByPk(projectId, { raw: true });
        const stacks = await Stacks.findByPk(stackId, { raw: true });

        return { ...project, stacks };
      });
      
      return Promise.all([...result]).then((values) => {
        return values;
      });
    }
}
