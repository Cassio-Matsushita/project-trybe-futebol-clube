import { Model, INTEGER, STRING, FLOAT } from 'sequelize';
import db from '.';

export default class LeaderboardModel extends Model {
  declare name: string;
  declare totalPoints: number;
  declare totalGames: number;
  declare totalVictories: number;
  declare totalDraws: number;
  declare totalLosses: number;
  declare goalsFavor: number;
  declare goalsOwn: number;
  declare goalsBalance: number;
  declare efficiency: number;
}

LeaderboardModel.init({
  name: {
    allowNull: false,
    primaryKey: true,
    type: STRING,
  },
  totalPoints: {
    type: INTEGER,
  },
  totalGames: {
    type: INTEGER,
  },
  totalVictories: {
    type: INTEGER,
  },
  totalDraws: {
    type: INTEGER,
  },
  totalLosses: {
    type: INTEGER,
  },
  goalsFavor: {
    type: INTEGER,
  },
  goalsOwn: {
    type: INTEGER,
  },
  goalsBalance: {
    type: INTEGER,
  },
  efficiency: {
    type: FLOAT,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  freezeTableName: true,
  modelName: 'leaderboard',
});
