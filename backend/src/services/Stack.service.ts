import Stacks from '../database/models/Stack.model';
import Images from '../database/models/Image.model';
import { IStack } from '../interfaces';

export default class StackService {
    private _model = Stacks;

    async getAll(): Promise<IStack[]> {
      const stacks = await this._model.findAll({
        attributes: {
          exclude: ['imageId']
        },
        include: [{
          model: Images,
          as: 'stackImage',
        }]
      });
      
      return stacks;
    }
}
