'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Turma','deletedAt',{
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Turma','deletedAt');
  }
};