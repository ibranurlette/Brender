'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('spesies', [{
        name: 'cat'
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('spesies', null, {});

  }
};
