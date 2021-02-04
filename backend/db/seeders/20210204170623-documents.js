'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Documents', [{
      userId: 1,
      document_name: "Galaxy Quest Intro",
      document_body: "A long clone ago in a repo far, far away...",
      projectId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Documents', null, {});
  }
};
