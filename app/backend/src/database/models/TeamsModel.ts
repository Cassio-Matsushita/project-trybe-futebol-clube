import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  freezeTableName: true,
  modelName: 'teams',
});
