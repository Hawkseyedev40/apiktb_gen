'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApiLog.belongsTo(models.ApiUsers, { foreignKey: 'apiUserId', as: 'apiUser' });
    }
  }
  ApiLog.init({
    apiUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    endpoint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requestBody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responseBody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'ApiLog',
  });
  return ApiLog;
};
