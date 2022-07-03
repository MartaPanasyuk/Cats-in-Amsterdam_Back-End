"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Ffluffiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Purring",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Friendliness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
