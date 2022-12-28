import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Biographies extends Model {
  declare id: number;
  declare text: string;
}

Biographies.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'biographies',
  timestamps: false,
});

export default Biographies;
