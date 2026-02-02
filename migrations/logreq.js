'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('logreq', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      old_data: {
        type: Sequelize.JSON,
        allowNull: false
      },
     
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('logreq');
  }
};