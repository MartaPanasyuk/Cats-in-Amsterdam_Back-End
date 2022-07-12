"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mark",
          email: "mark@apple.com",
          password: bcrypt.hashSync("apple", SALT_ROUNDS),
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olivia",
          email: "olivia@banana.com",
          password: bcrypt.hashSync("banana", SALT_ROUNDS),
          isOwner: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charlotte",
          email: "coco@coco.com",
          password: bcrypt.hashSync("coco", SALT_ROUNDS),
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dima",
          email: "dima@dim.com",
          password: bcrypt.hashSync("dima", SALT_ROUNDS),
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
