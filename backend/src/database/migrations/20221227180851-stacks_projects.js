'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('stacks_projects', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      projectId: {
        allowNull: false,
        field: 'project_id',
        type: Sequelize.STRING,
      },
      stackId: {
        allowNull: false,
        field: 'stack_id',
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('stacks_projects');
  }
};
