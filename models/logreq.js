"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Logreq extends Model {
    static associate(models) {
      // สามารถกำหนด association กับ Model อื่นๆ ได้ที่นี่
      // เช่น Logreq.belongsTo(models.Member);
    }
  }

  Logreq.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      
      old_data: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      devices: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Logreq",
      tableName: "logreq", // กำหนดชื่อตารางในฐานข้อมูล
      timestamps: false,
    }
  );
  return Logreq;
};
