import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class UserModels extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UserModels.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    username: {
      type: STRING,
    },
    role: {
      type: STRING,
    },
    email: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
  },
);
