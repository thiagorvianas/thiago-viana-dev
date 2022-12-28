import { INTEGER, Model, STRING, DATEONLY, BOOLEAN } from 'sequelize';
import db from '.';

class Experiences extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare type: string;
  declare companyName: string;
  declare start: Date;
  declare end: Date;
  declare workingNow: boolean;
}

Experiences.init({
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
  type: {
    type: STRING,
    allowNull: false,
  },
  companyName: {
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
  workingNow: {
    type: BOOLEAN,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'experiences',
  timestamps: false,
});

export default Experiences;
