'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      userId: 1,
      project_name: "Galaxy Quest",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};
