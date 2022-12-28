'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('experiences', {
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
      description: {
        allowNull: false,
        type: Sequelize.STRING(500),
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      companyName: {
        allowNull: false,
        field: 'company_name',
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
      workingNow: {
        allowNull: false,
        field: 'working_now',
        type: Sequelize.BOOLEAN,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('experiences');
  }
};
