'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Characters', [
      {
        userId: 1,
        name: "Dan Collins",
        age: 33,
        location: "Poughkeepsie, NY",
        bio: "He's an accountant.",
        imageUrl: "blank for now",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Characters', null, {});
  }
};
