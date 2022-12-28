import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Images from './Image.model';
import StacksProjects from './StackProject.model';

class Projects extends Model {
  declare id: number;
  declare title: string;
  declare link: string;
  declare imageId: number;
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
  link: {
    type: STRING,
    allowNull: false,
  },
  imageId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'projects',
  timestamps: false,
});

Images.hasOne(Projects, { foreignKey: 'imageId', as: 'image' });
Projects.belongsTo(Images, { foreignKey: 'id', as: 'image' });

export default Projects;
