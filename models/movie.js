'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    name: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    emoji: DataTypes.STRING,
    rated: DataTypes.STRING,
    genre_one: DataTypes.STRING,
    genre_two: DataTypes.STRING,
    length: DataTypes.STRING,
    director: DataTypes.STRING,
    starring: DataTypes.STRING,
    score: DataTypes.STRING,
    review: DataTypes.STRING,
    image: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps:false,
    tableName: 'movies',
  });
  return Movie;
};