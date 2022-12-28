'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stacks', [{
      name: 'Web Development',
      image_id: 1
    },
    {
      name: 'React.js',
      image_id: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stack', null, {});
  }
};
