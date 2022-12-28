import { Model } from 'sequelize';
import db from '.';

import Projects from './Project.model';
import Stacks from './Stack.model';

class StacksProjects extends Model {
  declare id: number;
  declare projectId: number;
  declare stackId: number;
}

StacksProjects.init({}, {
  underscored: true,
  sequelize: db,
  modelName: 'stacks_projects',
  timestamps: false,
});


Stacks.belongsToMany(Projects, {
  as: 'projects',
  through: StacksProjects,
  foreignKey: 'stackId',
  otherKey: 'projectId'
});

Projects.belongsToMany(Stacks, {
  as: 'stacks',
  through: StacksProjects,
  foreignKey: 'projectId',
  otherKey: 'stackId'
});

export default StacksProjects;
