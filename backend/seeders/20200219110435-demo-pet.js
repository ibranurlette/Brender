'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('pets', [{
        name: 'John Doe',
        gender: 'male',
        spesies: 1,
        age: 'adult',
        user: 2,
        about_pet: "pet ini sangat indah sekli",
        photo:'1.jpg'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pets', null, {});
  }
};
