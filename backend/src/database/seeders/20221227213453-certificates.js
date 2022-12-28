'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('certificates', [{
      title: 'Certification in Leadership, Learning and Resilience (Malala and Karnal)',
      institution: 'PUC-RS',
      link: 'https://certificado.pucrs.br/9af43184-6dd8-4ebc-a497-34a427aa0c0a'
    },
      {
      title: 'Introductory Javascript Course',
      institution: 'Trybe',
      link: 'https://smartcerts.co/certificate/kyqrzwkj'
    },
    {
      title: 'Web Development Fundamentals Module',
      institution: 'Trybe',
      link: 'https://www.credential.net/15101742-f0de-4606-a671-42d1f62cb61e'
    },
    {
      title: 'Front-End Module',
      institution: 'Trybe',
      link: 'https://smartcerts.co/certificate/kyqrzwkj'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Certificates', null, {});
  }
};
