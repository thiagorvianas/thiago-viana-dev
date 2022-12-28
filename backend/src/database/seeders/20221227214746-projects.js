'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [{
      title: 'Website and portfolio of the Arte na Rede PI project',
      link: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202022-12-27%2018-25-53.png?alt=media&token=efef8ce4-3933-4fed-a0a1-1339438b745a',
      image_id: 1,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
