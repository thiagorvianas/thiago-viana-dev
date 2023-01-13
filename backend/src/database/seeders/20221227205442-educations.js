'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('educations', [{
      title: 'Marketing Management',
      type: 'Higher Technology Course',
      institution: 'PUC-MG',
      start: '2021-07-10',
      end: '2023-06-10'
    },
    {
      title: 'Web Development',
      type: 'capacitation course',
      institution: 'Trybe',
      start: '2022-03-10',
      end: '2023-03-10'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('educations', null, {});
  }
};
