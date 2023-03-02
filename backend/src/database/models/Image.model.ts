import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';
import Projects from './Project.model';

class Images extends Model {
  declare id: number;
  declare name: string;
  declare link: string;
}

Images.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  link: {
    type: STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'images',
  timestamps: false,
});

export default Images;
