'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('experiences', [{
      title: 'FullStack Designer',
      description: 'FrontEnd development using JavaScript, CSS, Styled Components and React. Integrated the marketing team in the creation of strategies, visual identities, web applications and advertisements.',
      type: 'Part-time',
      company_name: 'DATAmérica',
      start: '2021-07-14',
      end: '2021-07-14',
      working_now: true
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Experience', null, {});
  }
};
