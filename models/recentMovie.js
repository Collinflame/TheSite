'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recentmovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recentmovie.init({
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recentmovie',
    timestamps:false,
    tableName: "recentmovies"
  });
  return Recentmovie;
};