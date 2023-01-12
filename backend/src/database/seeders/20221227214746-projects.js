'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        title: 'arte na rede pi',
        description: 'Institutional website and portfolio developed for Arte na Rede Piauí, which is a project supported by the Department of Culture of the State of Piauí that takes opportunities, training and workshops to artists and the public throughout the state.',
        link: 'https://artenaredepiaui.com.br/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202022-12-27%2018-25-53.png?alt=media&token=efef8ce4-3933-4fed-a0a1-1339438b745a',
        stacks: 'react.js;javascript;css'
      },
      {
        title: 'portfolio thiago viana dev',
        description: 'It is a site intended for my professional presentation and to put my projects and contact details.',
        link: 'https://github.com/thiagorvianas/thiago-viana-dev',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202022-12-27%2014-35-56.png?alt=media&token=3d513ae5-7678-42c9-92ed-8fea9eb61835',
        stacks: 'react.js;mysql;css'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
 