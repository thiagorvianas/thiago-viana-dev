'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('biographies', [{
      text: 'Since I was a child I have always been passionate about technology. I created game websites, blogs, made designs, videos, tried to create games and understand what was behind what I saw on the screens to reproduce. Even so, having to choose very young, when I entered higher education I chose the Nutrition course...'
    },
    {
      text: 
      'During the pandemic, an opportunity arose for me to have a first experience of working as a designer and video editor for digital marketing. It was then that I entered the Marketing Management course, to help me in the new job in the area in which I work until today.'
    },
    {
      text:
      'But at the end of the year 2021 on a trip I crossed again with the area that I have always been passionate about, programming. Since then I\'ve sought to learn and improve myself more and more, that\'s when I met Trybe and decided to make a career transition to the technology area as a FrontEnd Developer.'
    },
    {
      text: 'After almost a year I learned HTML, CSS, JavaScript, React.js, Redux, Docker, Node.js, SQL, Express, Sequelize, JWT, TypeScript…'
    },
    {
      text: 'Today, I\'m almost done with the BackEnd module and ready to work in the area that I found myself very happy with.',
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('biography', null, {});
  }
};
