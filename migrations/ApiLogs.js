'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ApiLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apiUserId: {
        type: Sequelize.INTEGER,
        allowNull: true, // Can be null if no API user is associated
        references: {
          model: 'ApiUsers', // Assuming your API user table is named 'ApiUsers'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      endpoint: {
        type: Sequelize.STRING,
        allowNull: false
      },
      method: {
        type: Sequelize.STRING,
        allowNull: false
      },
      requestBody: {
        type: Sequelize.TEXT,
        allowNull: true // Can be null if no request body
      },
      responseBody: {
        type: Sequelize.TEXT,
        allowNull: true // Can be null if no response body
      },
      statusCode: {
        type: Sequelize.INTEGER,
        allowNull: true // Can be null if no response yet
      },
      ipAddress: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userAgent: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ApiLogs');
  }
};
