"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mark",
          email: "mark@apple.com",
          password: "apple",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olivia",
          email: "olivia@banana.com",
          password: "banana",
          isOwner: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charlotte",
          email: "coco@coco.com",
          password: "coco",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dima",
          email: "dima@dim.com",
          password: "dima",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
