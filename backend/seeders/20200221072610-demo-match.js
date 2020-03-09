'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('matches', 
        [
        {
          pet_id: 1,
          pet_id_liked: 2,
          status:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pet_id: 2,
          pet_id_liked: 4,
          status:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pet_id: 3,
          pet_id_liked: 1,
          status:false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pet_id: 4,
          pet_id_liked: 3,
          status:false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      Example:
      return queryInterface.bulkDelete('matches', null, {});
  }
};
