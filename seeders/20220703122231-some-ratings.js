"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          stars: 3,
          categoryId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stars: 5,
          categoryId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
