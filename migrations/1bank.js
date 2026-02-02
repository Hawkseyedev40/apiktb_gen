"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bank", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      bank_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankNameEn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankNameTh: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountLength: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kbank_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scb_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_pic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_to_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      bank_from_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imgv2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      imgv3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      bankCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bank");
  },
};
