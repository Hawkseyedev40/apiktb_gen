"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Otp_forword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Otp_forword.init(
    {
      text_otp: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      otp_ref: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otp_ref_forword: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otp_sander: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      channel: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      language: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Otp_forword",
      tableName: "otp_forword",
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      //  paranoid: true, //use for soft delete with using deleted_at
      // underscored: true, //making underscored colomn as deletedAt to deleted_at
    }
  );
  return Otp_forword;
};
