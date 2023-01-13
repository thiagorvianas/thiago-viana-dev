import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Messages extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare message: string;
}

Messages.init({
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
  email: {
    type: STRING,
    allowNull: false,
  },
  message: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'messages',
  timestamps: false,
});

export default Messages;
