'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('messages', [{
      name: 'Thiago Viana',
      email: 'trodrigo734@gmail.com',
      message: 'Testando a api'
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('messages', null, {});
  }
};
