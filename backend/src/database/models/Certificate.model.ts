import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Certificates extends Model {
  declare id: number;
  declare title: string;
  declare institution: string;
  declare link: string;
}

Certificates.init({
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
  institution: {
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
  modelName: 'certificates',
  timestamps: false,
});

export default Certificates;
