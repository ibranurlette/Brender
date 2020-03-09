'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('payments', [{
        no_rek : '043494394',
        prof_transfer: '1.jpg',
        status:'free',
        user_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('payments', null, {});
  }
};
