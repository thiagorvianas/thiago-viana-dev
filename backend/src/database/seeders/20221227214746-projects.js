'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        title: 'portfolio thiago viana dev',
        description: 'It is a site intended for my professional presentation and to put my projects and contact details.',
        link: 'https://github.com/thiagorvianas/thiago-viana-dev',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202022-12-27%2014-35-56.png?alt=media&token=3d513ae5-7678-42c9-92ed-8fea9eb61835',
        stacks: 'react.js;mysql;styled-components'
      },
      {
        title: 'arte na rede pi',
        description: 'Institutional website and portfolio developed for Arte na Rede Piauí, which is a project supported by the Department of Culture of the State of Piauí that takes opportunities, training and workshops to artists and the public throughout the state.',
        link: 'https://artenaredepiaui.com.br/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202022-12-27%2018-25-53.png?alt=media&token=efef8ce4-3933-4fed-a0a1-1339438b745a',
        stacks: 'react.js;javascript;css'
      },
      {
        title: 'trivia redux react - ninth game',
        description: 'Question and answer game based on the Trivia game, developed using React and Redux, grouping its functionalities according to the demands defined in a Kanban board.',
        link: 'https://thiago-viana-dev-project-trivia-react-redux.vercel.app/game',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FCaptura%20de%20tela%202023-01-16%20131933.png?alt=media&token=98018062-c277-4118-93d4-e774cf9bf5cf',
        stacks: 'react.js;redux;styled-components'
      },
      {
        title: 'trybetunes',
        description: 'Application capable of playing songs from the most varied bands and artists, creating a list of favorite songs and editing the user\'s profile.',
        link: 'https://thiago-viana-dev-project-trybetunes.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-20-03.png?alt=media&token=cc7d3af1-42aa-45f7-85bd-22c63875baaf',
        stacks: 'react.js;css;api'
      },
      {
        title: 'tryunfo',
        description: 'Game in the style of Super Trump in which it is possible to create a deck with the free theme, add and remove a card from the deck, view all the cards that have been added to the deck, play with the created deck.',
        link: 'https://thiago-viana-dev-project-tryunfo.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-23-11.png?alt=media&token=7d5c1016-4edb-4c1b-bc72-d00e595056a1',
        stacks: 'react.js;css;api'
      },
      {
        title: 'solar system',
        description: 'Model of the solar system in which you can see all the planets of the solar system rendered on the screen and all the cards with information about space missions;',
        link: 'https://thiago-viana-dev-project-solar-system.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-23-11.png?alt=media&token=7d5c1016-4edb-4c1b-bc72-d00e595056a1',
        stacks: 'react.js;css;api'
      },
      {
        title: 'shopping cart',
        description: 'Fully dynamic shopping cart with data pulled directly from an API!',
        link: 'https://thiago-viana-dev-project-shopping-cart.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-24-18.png?alt=media&token=d10c232e-bced-460a-8eea-71bffeda5ed4',
        stacks: 'react.js;css;api'
      },
      {
        title: 'trybewarts',
        description: 'Trybewarts School of Magic form page, where students can send their feedback about it. The theme of this project is based on the book "Harry Potter", by J. K. Rowling, as programming is the closest we can get to something truly magical!',
        link: 'https://thiago-viana-dev-project-trybewarts.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-24-52.png?alt=media&token=f04be21d-a831-4b95-a8f8-0c460960c7da',
        stacks: 'javascript;html;css'
      },
      {
        title: 'todo list',
        description: 'Task list developed with HTML, CSS and JavaScript.',
        link: 'https://thiago-viana-dev-project-todo-list.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-25-58.png?alt=media&token=0908d5f2-673e-4675-b90f-f89cced4d50b',
        stacks: 'javascript;html;css'
      },
      {
        title: 'color guess',
        description: 'In this application it is possible to play a color guessing game and your score updates according to the correct answers. It was developed using JavaScript, HTML5 and CSS3.',
        link: 'https://thiago-viana-dev-project-color-guess.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-26-38.png?alt=media&token=06497217-9f71-4707-9683-be661cbcbd72',
        stacks: 'javascript;html;css'
      },
      {
        title: 'pixels art',
        description: 'Web page that contains a functional color palette that can be used to create pixel drawings. Project developed with javascript, css and html.',
        link: 'https://thiago-viana-dev-project-pixels-art.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-27-13.png?alt=media&token=134607da-5917-486a-8c07-98e00713497c',
        stacks: 'javascript;html;css'
      },
      {
        title: 'Pokedex',
        description: 'Virtual encyclopedia that holds pokémon species.',
        link: 'https://exercise-pokedex-state-nine.vercel.app/',
        image: 'https://firebasestorage.googleapis.com/v0/b/thiago-viana-dev.appspot.com/o/images%2FScreenshot%20from%202023-02-14%2016-27-50.png?alt=media&token=f3a598a3-0dd3-4cce-a1d4-2d17ff65d5af',
        stacks: 'javascript;html;css'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
 