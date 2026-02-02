// models/ApiUser.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApiUser.init({
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
      allowNull: true, // Token will be generated later
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'ApiUser',
  });
  return ApiUser;
};
