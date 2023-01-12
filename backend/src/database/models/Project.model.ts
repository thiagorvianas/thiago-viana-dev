import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Projects extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare image: string;
  declare link: string;
  declare stacks: string;
}

Projects.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  link: {
    type: STRING,
    allowNull: false,
  },
  stacks: {
    type: STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'projects',
  timestamps: false,
});

export default Projects;
