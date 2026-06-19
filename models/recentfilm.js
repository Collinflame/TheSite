'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recentfilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recentfilm.init({
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recentfilm',
    timestamps:false,
    tableName: "recentfilms"
  });
  return Recentfilm;
};