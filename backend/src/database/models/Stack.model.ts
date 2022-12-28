import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

import Images from './Image.model';

class Stacks extends Model {
  declare id: number;
  declare name: string;
  declare imageId: number;
}

Stacks.init({
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
  imageId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'stacks',
  timestamps: false,
});

Images.hasOne(Stacks, { foreignKey: 'imageId', as: 'stackImage' });
Stacks.belongsTo(Images, { foreignKey: 'id', as: 'stackImage' });

export default Stacks;
