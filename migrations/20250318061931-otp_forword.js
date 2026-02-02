"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("otp_forword", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      text_otp: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      otp_ref: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      otp_ref_forword: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      otp_sander: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      channel: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      language: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("otp_forword");
  }
};
