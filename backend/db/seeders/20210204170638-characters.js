'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Characters', [{
      userId: 1,
      name: "Tony Cheese",
      age: 38,
      location: "San Diego, California",
      bio: "He's the worst roommate in the entire world. He wakes up his roommate's tortugas.",
      imageUrl: "https://i.ytimg.com/vi/IqZ3xCPGrUE/maxresdefault.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Characters', null, {});
  }
};
