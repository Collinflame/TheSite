'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      emoji: {
        type: Sequelize.STRING
      },
      rated: {
        type: Sequelize.STRING
      },
      genre_one: {
        type: Sequelize.STRING
      },
      genre_two: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      starring: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};