"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User_account", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      log_type: {
        type: Sequelize.ENUM("bank_api", "gateway_api", "other"),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accountNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      data_user_id: {
        type: Sequelize.INTEGER,
        // references: { model: "datauser", key: "id" },
        // onDelete: "CASCADE",
        allowNull: true,
      },
      bank_id: {
        type: Sequelize.INTEGER,
        references: { model: "bank", key: "id" },
        onDelete: "CASCADE",
        allowNull: true,
      },
      pin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      auth: {
        type: Sequelize.TEXT,
      },
      deviceId: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      totalAvailableBalance: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      ApiUser_id: {
        type: Sequelize.INTEGER,
        references: { model: "ApiUser", key: "id" },
        onDelete: "CASCADE",
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User_account");
  }
};
