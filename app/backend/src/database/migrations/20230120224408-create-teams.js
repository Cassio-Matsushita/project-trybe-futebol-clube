'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', { 
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_name: Sequelize.STRING
    });
     
  },

  down: async (queryInterface) => {
     await queryInterface.dropTable('teams');
  }
};
