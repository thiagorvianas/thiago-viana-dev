'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
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
      link: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imageId: {
        allowNull: false,
        field: 'image_id',
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};
