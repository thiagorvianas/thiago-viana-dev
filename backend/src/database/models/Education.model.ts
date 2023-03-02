import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';

class Educations extends Model {
  declare id: number;
  declare title: string;
  declare type: string;
  declare institution: string;
  declare start: Date;
  declare end: Date;
}

Educations.init({
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
  type: {
    type: STRING,
    allowNull: false,
  },
  institution: {
    type: STRING,
    allowNull: false,
  },
  start: {
    type: DATEONLY,
    allowNull: false,
  },
  end: {
    type: DATEONLY,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'educations',
  timestamps: false,
});

export default Educations;
