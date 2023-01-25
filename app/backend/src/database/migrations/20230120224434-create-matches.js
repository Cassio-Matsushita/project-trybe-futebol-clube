'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team_goals: Sequelize.INTEGER,
      away_team_goals: Sequelize.INTEGER,
      in_progress: Sequelize.BOOLEAN,
      home_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      away_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        }
      },
    });
  },

  down: async (queryInterface) => {
   await queryInterface.dropTable('matches');
  }
};