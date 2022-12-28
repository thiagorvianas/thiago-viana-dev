'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('educations', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      institution: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      start: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      end: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('educations');
  }
};
