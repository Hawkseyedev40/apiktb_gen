'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('KrungthaiBusinessTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apiUserId: { // Foreign key to link with the API user who initiated the login
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ApiUsers', // Make sure this matches your ApiUsers table name
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Or 'SET NULL'/'RESTRICT' depending on your requirement
      },
      ktbUserId: { // Corresponds to datasave.userId
        type: Sequelize.STRING,
        allowNull: false
      },
      ktbCompanyId: { // Corresponds to datasave.companyId
        type: Sequelize.STRING,
        allowNull: false
      },
      accessToken: { // Corresponds to datasave.accessToken
        type: Sequelize.TEXT, // Use TEXT for potentially long tokens
        allowNull: false
      },
      refreshToken: { // Corresponds to datasave.refreshToken
        type: Sequelize.TEXT, // Use TEXT for potentially long tokens
        allowNull: true // Refresh token might not always be provided
      },
      expiresIn: { // Corresponds to datasave.expiresIn
        type: Sequelize.INTEGER,
        allowNull: true // Or false if always provided
      },
      tokenType: { // Corresponds to datasave.tokenType
        type: Sequelize.STRING,
        allowNull: true // e.g., 'Bearer'
      },
      obtainedAt: { // Corresponds to datasave.obtainedAt
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Optional: Add indexes for faster lookups
    await queryInterface.addIndex('KrungthaiBusinessTokens', ['apiUserId']);
    await queryInterface.addIndex('KrungthaiBusinessTokens', ['ktbUserId', 'ktbCompanyId']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('KrungthaiBusinessTokens');
  }
};
