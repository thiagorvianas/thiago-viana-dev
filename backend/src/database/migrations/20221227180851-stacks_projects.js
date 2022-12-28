'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('stacks_projects', {
      projectId: {
        type: Sequelize.INTEGER,
        field: 'project_id',
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      stackId: {
        type: Sequelize.INTEGER,
        field: 'stack_id',
        references: {
          model: 'stacks',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('stacks_projects');
  }
};
