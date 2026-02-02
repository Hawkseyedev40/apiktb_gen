// models/ApiUsers.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApiUsers.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    apiKey: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    apiToken: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'ApiUsers',
  });
  return ApiUsers;
};
