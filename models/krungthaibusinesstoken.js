// models/krungthaibusinesstoken.js
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class KrungthaiBusinessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      // A KrungthaiBusinessToken belongs to an ApiUser
      KrungthaiBusinessToken.belongsTo(models.ApiUsers, {
        foreignKey: 'apiUserId',
        as: 'apiUser' // Optional alias for easier access
      });
    }
  }
  KrungthaiBusinessToken.init({
    // id is automatically handled by Sequelize as primary key
    apiUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { // Define reference for association clarity (optional here, mandatory in associate)
        model: 'ApiUsers',
        key: 'id'
      }
    },
    ktbUserId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ktbCompanyId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expiresIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tokenType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accountRefId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    obtainedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
    // createdAt and updatedAt are handled by Sequelize by default
  }, {
    sequelize,
    modelName: 'KrungthaiBusinessToken', // Singular model name
    tableName: 'KrungthaiBusinessTokens', // Explicitly set table name to match migration
    // timestamps: true, // This is the default, ensures createdAt and updatedAt are managed
    // If your other models use underscored names like 'created_at', add:
    // underscored: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
  });
  return KrungthaiBusinessToken;
};
